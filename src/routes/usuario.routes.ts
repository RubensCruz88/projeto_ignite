import { Router } from 'express';
import multer from 'multer';
import { AtualizaAvatarController } from '../modules/contas/useCases/atualizaAvatar/AtualizaAvatarController';
import { CriaUsuarioController } from '../modules/contas/useCases/criaUsuario/CriaUsuarioController';
import uploadConfig from '../config/upload';
import { confereAutenticado } from '../middlewares/confereAutenticado';

const usersRotas = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const criaUsuarioControlle = new CriaUsuarioController();
const atualizaAvatarController = new AtualizaAvatarController();

usersRotas.post("/",criaUsuarioControlle.handle);
usersRotas.patch(
	"/avatar", 
	confereAutenticado,
	uploadAvatar.single("avatar"),
	atualizaAvatarController.handle
);

export { usersRotas }