import { container } from 'tsyringe';

import { CategoriaRepositorio, ICategoriasRepositorio } from '@modules/carros/infra/typeorm/repositories/CategoriaRepositorio'
import { EspecificacaoRepositorio, IEspecificacaoRepositorio } from '@modules/carros/infra/typeorm/repositories/EspecificacaoRepositorio';
import { IUsuarioRepositorio, UsuarioRepositorio } from '@modules/contas/infra/typeorm/repositories/UsuarioRepositorio';
import { ICarroRepositorio } from '@modules/carros/repositories/ICarroRepositorio';
import { CarroRepositorio } from '@modules/carros/infra/typeorm/repositories/CarroRepositorio';

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

container.registerSingleton<ICarroRepositorio>(
	"CarroRepositorio",
	CarroRepositorio
)