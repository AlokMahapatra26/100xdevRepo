const express = require("express");
const { getAllTodo, createTodo, getTodo } = require("../controller/todoController");
const router = express();

//define router
router.get("/todos" , getAllTodo);
router.get("/todo" , getTodo);
router.post("/todos" , createTodo);


module.exports = router;