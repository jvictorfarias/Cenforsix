import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

// Rotas de usuário
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// Rota de sessão
routes.post('/session', SessionController.store);

// Rota de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
