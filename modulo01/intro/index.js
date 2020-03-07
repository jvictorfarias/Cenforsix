const express = require("express");

const server = express();
server.use(express.json());

const projects = [
  {
    id: 0,
    title: "SDN",
    tasks: ["Make the article", "Teste the cycle", "Implement the project"]
  },
  {
    id: 1,
    title: "GameNight 6th Edition",
    tasks: ["Make project", "Allocate people", "Reserve the local"]
  },
  {
    id: 2,
    title: "University Meetings",
    tasks: [
      "Prepare the lecture",
      "Organize Capture The Flag competition",
      "Plan EcoPet actions"
    ]
  }
];

// Requisition count
let count = 0;

// Global Middleware
server.use((req, res, next) => {
  console.time("Requisition");
  console.log(`METHOD: ${req.method}\nURL: ${req.url}`);
  count += 1;
  next();
  console.timeEnd("Requisition");
  console.log(count);
});

// Middleware local
function checkProjectId(req, res, next) {
  const { id } = req.params;
  for (const key of Object.keys(projects)) {
    if (projects[key].id == id) {
      req.projects = projects[key]; // Avoids verifing the ID in every method
      next(); // This variable is pushed through the middleware
      return;
    }
  }
  return res.status(400).json({ error: "ID not found on server" });
}

// List the projects
server.get("/projects", (req, res) => {
  return res.json(projects);
});

// Add projects to the list
server.post("/projects", (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  const { tasks } = req.body;

  projects.push({ id, title, tasks });
  return res.status(202).json({ created: "done" });
});

// Add new tasks to the project
server.post("/projects/:id/tasks", checkProjectId, (req, res) => {
  const { title } = req.body;

  if (!req.projects.tasks) {
    req.projects.tasks = [];
  }
  req.projects.tasks.push(title);

  return res.status(202).json({ added: "task added" });
});

// Rename projects from the list index
server.put("/projects/:id", checkProjectId, (req, res) => {
  const { title } = req.body;

  req.projects.title = title;

  return res.status(200).json({ rename: "done" });
});

// Delete projects from the index list
server.delete("/projects/:id", checkProjectId, (req, res) => {
  projects.splice(req.projects.id, 1);

  return res.status(200).json({ delete: "done" });
});

server.listen(3333);
