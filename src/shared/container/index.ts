import { container } from 'tsyringe';

import { CategoriaRepositorio, ICategoriasRepositorio } from '../../modules/carros/repositories/CategoriaRepositorio'
import { EspecificacaoRepositorio, IEspecificacaoRepositorio } from '../../modules/carros/repositories/EspecificacaoRepositorio';

container.registerSingleton<ICategoriasRepositorio>(
	"CategoriaRepositorio",
	CategoriaRepositorio
);

container.registerSingleton<IEspecificacaoRepositorio>(
	"EspecificacaoRepositorio",
	EspecificacaoRepositorio
);