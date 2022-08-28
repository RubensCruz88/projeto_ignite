import crypto from 'crypto';
import multer from 'multer';
import { resolve } from 'path';

export default {
	upload(folder: string){
		return {
			storage: multer.diskStorage({
				destination: resolve(__dirname,'..','..',folder),
				filename: (request, file, callback) => {
					const hashArquivo = crypto.randomBytes(16).toString('hex');
					const nomeArquivo = `${hashArquivo}-${file.originalname}`;

					return callback(null,nomeArquivo);
				}
			})
		}
	}
}
