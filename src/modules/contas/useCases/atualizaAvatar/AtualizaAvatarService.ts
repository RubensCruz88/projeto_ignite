import { inject, injectable } from "tsyringe";
import { Usuario } from "../../model/Usuario";
import { IUsuarioRepositorio } from "../../repositories/UsuarioRepositorio";
import { deleteFile } from '../../../../utils/file';

interface IRequest {
	user_id: string;
	arquivoAvatar: string; 
}

@injectable()
class AtualizaAvatarService {
	constructor(
		@inject("UsuarioRepositorio")
		private usuarioRepositorio: IUsuarioRepositorio
	){}

	async execute({user_id, arquivoAvatar}: IRequest): Promise<Usuario>{

		const usuario = await this.usuarioRepositorio.BuscaPorId(user_id);

		if(usuario.avatar){
			await deleteFile(`./tmp/avatar/${usuario.avatar}`);
		}

		usuario.avatar = arquivoAvatar;

		await this.usuarioRepositorio.create(usuario);

		return usuario;
	}
}

export { AtualizaAvatarService }