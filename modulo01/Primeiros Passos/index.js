// es5
const express = require("express");

const server = express();

server.use(express.json());

/**
 * http://localhost:3333
 * Route Params ok
 * Query Params
 * Body Request
 * Template Strings
 */

// Criação de rotas

const users = ["Pedrão"];

/** 
server.get("/teste/:id", (req, res) => {
  const { id } = req.params;
  return res.status(200).send(id);
});

server.get("/teste2", (req, res) => {
  return res.status(200).json({ aluno: "Abne" });
});

  Middlewares
*/

server.use((req, res, next) => {
  console.log(`Method: ${req.method}`);
  next();
  return res.status(404).json({ error: "Not found" });
});

server.get("/users", (req, res) => {
  return res.status(200).json(users);
});

server.post("/users", (req, res) => {
  const { nome } = req.body;
  users.push(nome);

  return res.status(200).json({ resultado: `Meu nome é: ${nome}` });
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const usuario = users[id];

  return res.status(200).json(usuario);
});

server.listen(3333);
