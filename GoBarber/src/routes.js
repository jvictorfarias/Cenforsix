import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/users', async (req, res) => {
  const user = await User.create({
    name: 'Joao Victor',
    email: 'victorfarias.new@gmail.com',
    password_hash: '12345',
  });

  return res.json(user);
});

export default routes;
