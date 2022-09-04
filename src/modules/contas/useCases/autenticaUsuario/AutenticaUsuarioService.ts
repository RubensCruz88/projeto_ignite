import { AppError } from '@errors/AppError';
import { inject, injectable } from "tsyringe";
import { IUsuarioRepositorio } from "../../repositories/UsuarioRepositorio";
import { sign } from 'jsonwebtoken';

import { compare } from 'bcryptjs';

interface IRequest {
	email: string;
	senha: string;
}

interface IResponse {
	usuario: {
		name: string;
		email: string;
	},
	token: string;
}

@injectable()
class AutenticaUsuarioService{
	constructor(
		@inject("UsuarioRepositorio")
		private usuarioRespositorio: IUsuarioRepositorio
	){}

	async execute({email, senha}: IRequest): Promise<IResponse> {
		const usuario = await this.usuarioRespositorio.BuscaPorEmail(email);

		if(!usuario){
			throw new AppError("Email ou senha inválida");
		}

		const validaSenha = await compare(senha, usuario.password);

		if(!validaSenha){
			throw new AppError("Email ou senha inválida");
		}

		const token = sign({},"ae2286e05b863c3f779f9d3c0cbce934",{
			subject: usuario.id,
			expiresIn: "1d"
		});

		const retornoToken: IResponse = {
			token,
			usuario: {
				name: usuario.name,
				email: usuario.email
			}
		}

		return retornoToken;

	}
}

export { AutenticaUsuarioService }