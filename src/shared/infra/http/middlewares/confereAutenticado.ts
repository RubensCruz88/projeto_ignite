import { AppError } from '../../../errors/AppError';
import { NextFunction, Request, Response} from 'express';
import { verify } from 'jsonwebtoken';
import { UsuarioRepositorio } from '../../../../modules/contas/infra/typeorm/repositories/UsuarioRepositorio';

interface IPayload {
	sub: string
}

export async function confereAutenticado(request: Request, response: Response, next: NextFunction){
	const authHeader = request.headers.authorization;

	if(!authHeader){
		throw new AppError("Token não informado",401);
	}

	const [, token] = authHeader.split(" ");

	try {
		const { sub: user_id } = verify(token, "ae2286e05b863c3f779f9d3c0cbce934") as IPayload;

		const usuarioRepositorio = new UsuarioRepositorio();
		const usuario = await usuarioRepositorio.BuscaPorId(user_id);

		if(!usuario){
			throw new AppError("Usuario não existe",401);
		}

		request.usuario = {
			id: user_id
		};

		next();
	} catch(err){
		throw new AppError("Token inválido",401);
	}
}

