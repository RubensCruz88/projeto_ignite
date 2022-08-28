import { AppError } from '../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { ICriaUsuarioDTO } from "../../dtos/ICriaUsuarioDTO";
import { Usuario } from "../../model/Usuario";
import { IUsuarioRepositorio, UsuarioRepositorio } from "../../repositories/UsuarioRepositorio";
import { hash } from 'bcryptjs';

@injectable()
class CriaUsuarioService {
	constructor(
		@inject("UsuarioRepositorio")
		private usuarioRepositorio: IUsuarioRepositorio
	){}
	
	async execute({ email, driver_license, name, password}: ICriaUsuarioDTO): Promise<Usuario>{
		const passwordHash = await hash(password, 7);

		const usuarioExiste = await this.usuarioRepositorio.BuscaPorEmail(email);

		if(usuarioExiste){
			throw new AppError("Usuario já existe");
		}

		const usuario = await this.usuarioRepositorio.create({
			name,
			email,
			password: passwordHash,
			driver_license
		})

		return usuario
	}
}

export { CriaUsuarioService }