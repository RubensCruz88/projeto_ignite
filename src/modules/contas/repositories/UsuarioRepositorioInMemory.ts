import { Usuario } from "../model/Usuario";
import { IUsuarioRepositorio } from "./UsuarioRepositorio";
import { ICriaUsuarioDTO } from '../dtos/ICriaUsuarioDTO';

class UsuarioRepositorioInMemory implements IUsuarioRepositorio {
	usuarios: Usuario[] = [];

	async create({name, password, email, driver_license}: ICriaUsuarioDTO): Promise<Usuario> {
		const usuario = new Usuario();

		Object.assign(usuario, {
			name,
			password,
			email,
			driver_license
		});

		this.usuarios.push(usuario);

		return usuario;
	}

	async BuscaPorEmail(email: string): Promise<Usuario> {
		return this.usuarios.find((usuario) => usuario.email === email);
	}


	async BuscaPorId(id: string): Promise<Usuario>{
		return this.usuarios.find((usuario) => usuario.id === id);
	}
}

export { UsuarioRepositorioInMemory }