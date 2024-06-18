const express = require("express");
const server = express();
const logger = require("morgan");
const uid = require("uuid");

server.use(express.json());

server.use(express.urlencoded({ extended: false }));
server.use(logger("dev"));

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

let tasks = [];

//post a new task
server.post("/task", (req, res) => {
  const taskDetails = req.body;
  const id = uid.v4();
  tasks.push({
    id,
    title: taskDetails.title,
    description: taskDetails.description,
    status: taskDetails.status,
  });
  res.send({ message: "Task added successfully" });
});

//get all tasks
server.get("/tasks", (req, res) => {
  res.send(tasks);
});

//get a task by id
server.get("/task/:id", (req, res) => {
  const taskId = req.params.id;
  const taskDetails = tasks.find((task) => task.id === taskId);
  res.send(taskDetails);
});

//update only the tittle and description of a task by id
server.put("/task/:id", (req, res) => {
  const updatedTaskDetails = req.body;
  const taskId = req.params.id;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].title = updatedTaskDetails.title;
      tasks[i].description = updatedTaskDetails.description;
      break;
    }
  }
  res.send({ message: "Task updated successfully" });
});

//update the status of a task by id
server.patch("/task/:id", (req, res) => {
  const updatedTaskDetails = req.body;
  const taskId = req.params.id;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === taskId) {
      tasks[i].status = updatedTaskDetails.status;
      break;
    }
  }
  res.send({ message: "Task status updated successfully" });
});

//delete a task by id
server.delete("/task/:id", (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter((task) => task.id !== taskId);
  res.send({ message: "Task deleted successfully" });
});
