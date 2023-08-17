const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTask, getTasks } = require("../controllers/taskController");
const router = express.Router();


router.get("/api/tasks", getTasks)
router.post("/api/tasks", createTask)
router.get("/api/tasks/:id", getTask)



module.exports = router