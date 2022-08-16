import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio';

import { CriaCategoriaService } from './CriaCategoriaService';
import { CriaCategoriaController } from './CriaCategoriaController';

const categoriaRepository = CategoriaRepositorio.getInstance();
const criaCcategoriaService = new CriaCategoriaService(categoriaRepository);
const criaCategoriaController = new CriaCategoriaController(criaCcategoriaService);

export { criaCategoriaController };