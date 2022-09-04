import { container } from 'tsyringe';

import { CategoriaRepositorio, ICategoriasRepositorio } from '@modules/carros/repositories/CategoriaRepositorio'
import { EspecificacaoRepositorio, IEspecificacaoRepositorio } from '@modules/carros/repositories/EspecificacaoRepositorio';
import { IUsuarioRepositorio, UsuarioRepositorio } from '@modules/contas/repositories/UsuarioRepositorio';

container.registerSingleton<ICategoriasRepositorio>(
	"CategoriaRepositorio",
	CategoriaRepositorio
);

container.registerSingleton<IEspecificacaoRepositorio>(
	"EspecificacaoRepositorio",
	EspecificacaoRepositorio
);

container.registerSingleton<IUsuarioRepositorio>(
	"UsuarioRepositorio",
	UsuarioRepositorio
);