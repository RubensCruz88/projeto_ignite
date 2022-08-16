import { CategoriaRepositorio } from '../../repositories/CategoriaRepositorio';
import { ListaCategoriaService } from './ListaCategoriaService';
import { ListaCategoriaController } from './ListaCategoriaController';

const categoriaRepository = CategoriaRepositorio.getInstance();

const listaCategoriaService = new ListaCategoriaService(categoriaRepository);
const listaCategoriaController = new ListaCategoriaController(listaCategoriaService);

export { listaCategoriaController };