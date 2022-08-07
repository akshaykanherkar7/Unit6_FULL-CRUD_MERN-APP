const express = require("express");
const app = express();
app.use(express.json());
const todosRoutes = require("./Routes/todos.routes");
const studentsRoutes = require("./Routes/students.routes");

app.use("/todos", todosRoutes);
app.use("/students", studentsRoutes);

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
