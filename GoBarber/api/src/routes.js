import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';
import ScheduleController from './app/controllers/ScheduleController';
import AvailableController from './app/controllers/AvailableController';

const routes = new Router();
const upload = multer(multerConfig);

// Rotas de usuário
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

// Rotas de providers
routes.get('/providers', authMiddleware, ProviderController.index);
routes.get(
  '/providers/:providerId/available',
  authMiddleware,
  AvailableController.index,
);

// Rotas de agendamentos
routes.post('/appointments', authMiddleware, AppointmentController.store);
routes.get('/appointments', authMiddleware, AppointmentController.index);
routes.delete(
  '/appointments/:id',
  authMiddleware,
  AppointmentController.delete,
);

// Rota de agendamentos do provedor de serviços
routes.get('/schedule', authMiddleware, ScheduleController.index);

// Rota de sessão
routes.post('/session', SessionController.store);

// Rota de arquivos
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
