const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTask, getTasks, deleteTask } = require("../controllers/taskController");
const router = express.Router();


router.get("/api/tasks", getTasks)
router.posts("/api/tasks", createTask)
router.get("/api/tasks/:id", getTask)
router.delete("/api/tasks/:id", deleteTask)



module.exports = router