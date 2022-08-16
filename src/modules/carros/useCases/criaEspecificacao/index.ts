import { EspecificacaoRepositorio } from '../../repositories/EspecificacaoRepositorio';
import { CriaEspecificacaoService } from './CriaEspecificacaoService';
import { CriaEspecificacaoController } from './CriaEspecificacaoController';

const especificacaoRepository = EspecificacaoRepositorio.getInstance();
const criaEspecificacaoService = new CriaEspecificacaoService(especificacaoRepository);
const criaEspecificacaoController = new CriaEspecificacaoController(criaEspecificacaoService);

export { criaEspecificacaoController };