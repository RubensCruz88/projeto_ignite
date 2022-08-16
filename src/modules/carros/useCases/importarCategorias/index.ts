import { CategoriaRepositorio } from "../../repositories/CategoriaRepositorio";
import { ImportarCategoriaController } from "./importarCategoriaController";
import { ImportarCategoriaUseCase } from "./importarCategoriaUseCase";

const categoriaRepositorio = new CategoriaRepositorio();
const importarCategoriaUseCase = new ImportarCategoriaUseCase(categoriaRepositorio);
const importarCategoriaController = new ImportarCategoriaController(importarCategoriaUseCase);

export { importarCategoriaController};