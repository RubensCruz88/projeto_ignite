import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';
import { ListaEspecificacaoService } from './ListaEspecificacaoService';
import { ListaEspecificacaoController } from './ListaEspecificacaoController';

const especificacaoRepository = EspecificacaoRepositorio.getInstance();
const listaEspecificacaoService = new ListaEspecificacaoService(especificacaoRepository);
const listaEspecificacaoController = new ListaEspecificacaoController(listaEspecificacaoService);

export { listaEspecificacaoController };