const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTask, getTasks, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();


router.get("/api/tasks", getTasks)
router.post("/api/tasks", createTask)
router.get("/api/tasks/:id", getTask)
router.delete("/api/tasks/:id", deleteTask)
router.put("/api/tasks/:id", updateTask)


module.exports = router