const express = require("express");
const todosRoutes = express.Router();
const fs = require("fs");
const path = require("path");

const dbjsonData = fs.readFileSync("././db.json", "utf-8");
let dbArrays = JSON.parse(dbjsonData);

todosRoutes.get("/", (req, res) => {
  res.send(dbArrays.todos);
});

todosRoutes.post("/", (req, res) => {
  let newTodo = req.body;
  dbArrays.todos.push(newTodo);
  fs.writeFileSync("././db.json", JSON.stringify(dbArrays), "utf-8");
  res.send(newTodo);
});

todosRoutes.patch("/:id", (req, res) => {
  const id1 = parseInt(req.params.id);
  let { id, title, status } = req.body;

  let newTodos = dbArrays.todos.map((todo) => {
    if (todo.id === id1) {
      //   if (id) {
      //     return { ...todo, id: id };
      //   }
      //   if (title) {
      //     return { ...todo, title: title };
      //   }
      return { ...todo, status: status };
    } else {
      return todo;
    }
  });
  dbArrays.todos = newTodos;
  fs.writeFileSync("././db.json", JSON.stringify(dbArrays), "utf-8");
  res.send("todo patched successfully");
});

todosRoutes.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let todo = req.body;
  let newTodos = dbArrays.todos.map((el) => {
    if (el.id === id) {
      return { ...todo };
    } else {
      return el;
    }
  });
  dbArrays.todos = newTodos;
  fs.writeFileSync("././db.json", JSON.stringify(dbArrays), "utf-8");
  res.send("todo puted successfully");
});

todosRoutes.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let newTodos = dbArrays.todos.filter((el) => el.id !== id);
  dbArrays.todos = newTodos;
  fs.writeFileSync("././db.json", JSON.stringify(dbArrays), "utf8");
  res.send("todo deleted successfully");
});

module.exports = todosRoutes;
