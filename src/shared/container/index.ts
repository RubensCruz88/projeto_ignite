import { container } from 'tsyringe';

import "@shared/container/providers";

import { CategoriaRepositorio, ICategoriasRepositorio } from '@modules/carros/infra/typeorm/repositories/CategoriaRepositorio'
import { EspecificacaoRepositorio, IEspecificacaoRepositorio } from '@modules/carros/infra/typeorm/repositories/EspecificacaoRepositorio';
import { IUsuarioRepositorio, UsuarioRepositorio } from '@modules/contas/infra/typeorm/repositories/UsuarioRepositorio';
import { ICarroRepositorio } from '@modules/carros/repositories/ICarroRepositorio';
import { CarroRepositorio } from '@modules/carros/infra/typeorm/repositories/CarroRepositorio';
import { ImagemCarroRepositorio } from '@modules/carros/infra/typeorm/repositories/ImagemCarroRepositorio';
import { IImagemCarroRepositorio } from '@modules/carros/repositories/IImagemCarroRepositorio';
import { IAluguelRespositorio } from '@modules/alugueis/repositories/IAluguelRespositorio';
import { AluguelRepositorio } from '@modules/alugueis/infra/typeorm/repositories/AluguelRepositorio';

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
);

container.registerSingleton<IImagemCarroRepositorio>(
	"ImagemCarroRepositorio",
	ImagemCarroRepositorio
)

container.registerSingleton<IAluguelRespositorio>(
	"AluguelRepositorio",
	AluguelRepositorio
)