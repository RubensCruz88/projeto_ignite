import { Usuario } from '../model/Usuario';
import { Repository } from 'typeorm';
import { ICriaUsuarioDTO } from '@modules/contas/dtos/ICriaUsuarioDTO';
import { dataSource } from '@shared/infra/typeorm/dataSource';

interface IUsuarioRepositorio {
	create(dados: ICriaUsuarioDTO): Promise<Usuario>
	BuscaPorEmail(email: string): Promise<Usuario>
	BuscaPorId(id: string): Promise<Usuario>
}

class UsuarioRepositorio implements IUsuarioRepositorio {
	private repositorio: Repository<Usuario>

	constructor(){
		this.repositorio = dataSource.getRepository(Usuario)
	}

	async create({id, name, email, driver_license, password, avatar}: ICriaUsuarioDTO): Promise<Usuario> {
		const user = this.repositorio.create({
			id,
			name, 
			email,
			driver_license,
			password,
			avatar
		});

		await this.repositorio.save(user);

		return user;
	}

	async BuscaPorEmail(email: string): Promise<Usuario> {
		const usuario = await this.repositorio.findOneBy({email});

		return usuario
	}

	async BuscaPorId(id: string): Promise<Usuario> {
		const usuario = await this.repositorio.findOneBy({id});

		return usuario
	}
}

export { UsuarioRepositorio, IUsuarioRepositorio }