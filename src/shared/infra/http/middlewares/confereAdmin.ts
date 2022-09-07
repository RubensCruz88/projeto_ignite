import { UsuarioRepositorio } from '@modules/contas/infra/typeorm/repositories/UsuarioRepositorio';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response} from 'express';

export async function confereAdmin(request: Request, response: Response, next: NextFunction){
	const { id } = request.usuario;
	const usuarioRepositorio = new UsuarioRepositorio();

	const usuario = await usuarioRepositorio.BuscaPorId(id) 
	
	if(!usuario.isAdmin){
		throw new AppError("Usuario não é admin");
	}

	return next()

}