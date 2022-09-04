import { AppError } from "@shared/errors/AppError";
import { ICriaUsuarioDTO } from "@modules/contas/dtos/ICriaUsuarioDTO";
import { UsuarioRepositorioInMemory } from "../../repositories/UsuarioRepositorioInMemory";
import { CriaUsuarioService } from "../criaUsuario/CriaUsuarioService";
import { AutenticaUsuarioService } from "./AutenticaUsuarioService"

let autenticaUsuarioService: AutenticaUsuarioService;
let usuarioRepositorioInMemory: UsuarioRepositorioInMemory;
let criaUsuarioService: CriaUsuarioService;

describe("Autentica usuário", () => {
	beforeEach(() =>{
		usuarioRepositorioInMemory = new UsuarioRepositorioInMemory();
		autenticaUsuarioService = new AutenticaUsuarioService(usuarioRepositorioInMemory);
		criaUsuarioService = new CriaUsuarioService(usuarioRepositorioInMemory);

	})

	it("Deve ser possível criar a autenticação do usuário", async () => {
		const usuario: ICriaUsuarioDTO = {
			driver_license: "12345",
			name: "teste",
			email: "teste@teste.com.br",
			password: "1234"
		};

		await criaUsuarioService.execute(usuario);

		const usuarioAutenticado = await autenticaUsuarioService.execute({
			email: usuario.email,
			senha: usuario.password

		});

		expect(usuarioAutenticado).toHaveProperty("token");
	});

	it("Não deve permitir autenticar um usuario não existente", () =>{
		expect(async () => {
			const usuarioAutenticado = await autenticaUsuarioService.execute({
				email: "teste",
				senha: "1234"
			});
		}).rejects.toBeInstanceOf(AppError);
	});

	it("Não deve permitir autenticar um usuario com a senha incorreta", () => {
		expect( async () => {
			const usuario: ICriaUsuarioDTO = {
				driver_license: "12345",
				name: "teste",
				email: "teste@teste.com.br",
				password: "1234"
			};
					
			await criaUsuarioService.execute(usuario);

			await autenticaUsuarioService.execute({
				email: usuario.email,
				senha: "5431"
			});
		}).rejects.toBeInstanceOf(AppError);
	})
})