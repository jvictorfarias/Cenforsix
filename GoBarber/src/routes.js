import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rotas de usuário
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// Rota de sessão
routes.post('/session', SessionController.store);

export default routes;
