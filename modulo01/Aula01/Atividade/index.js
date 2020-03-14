const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Fazer Orçamento", "Rever o Inventário", "etc."]
  }
];

function checkProjectId(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(404).json({ error: "ID not found" });
  }

  next();
}

server.post("/projects", (req, res) => {
  const project = req.body;

  projects.push(project);

  return res.json(project);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const projectId = projects.findIndex(p => p.id == id);

  projects[projectId].title = title;

  return res.status(200).json(projects[projectId]);
});

server.delete("/projects/:id", checkProjectId, (req, res) => {
  const { id } = req.params;

  const projectId = projects.findIndex(p => p.id == id);

  projects.splice(projectId, 1);

  return res.status(200).json(projects);
});

server.listen(3333);
