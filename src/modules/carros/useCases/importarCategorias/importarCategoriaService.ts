import { inject, injectable } from 'tsyringe';
import fs from 'fs';
import { parse } from 'csv-parse';
import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio';

interface IImportarCategoria{
	nome: string;
	descricao: string;
}

@injectable()
class ImportarCategoriaService {
	constructor(
		@inject("CategoriaRepositorio")
		private categoriaRepositorio: CategoriaRepositorio
	){}

	carregaCategorias(file: Express.Multer.File): Promise<IImportarCategoria[]>{
		return new Promise((resolve,reject) =>{
			const stream = fs.createReadStream(file.path);
			const parseFile = parse();
			const categorias: IImportarCategoria[] = [];
	
			 stream.pipe(parseFile);
	
			parseFile.on("data", async (linha) => {
				const [nome, descricao] = linha
				categorias.push({
					nome, 
					descricao
				})
			})
			.on("end", () => {
				fs.promises.unlink(file.path);
				resolve(categorias);
			})
			.on("error",(err) => {
				reject(err);
			});
		})
	}

	async execute(file: Express.Multer.File): Promise<void> {
		const categorias = await this.carregaCategorias(file);

		categorias.map(categoria => {
			const {nome, descricao} = categoria;

			const existeCategoria = this.categoriaRepositorio.VerificaDuplicado(nome);

			if(!existeCategoria){
				this.categoriaRepositorio.create({
					nome,
					descricao
				})
			}
		})
	}
}

export { ImportarCategoriaService }