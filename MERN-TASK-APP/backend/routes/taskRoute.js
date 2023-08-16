const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTask } = require("../controllers/taskController");
const router = express.Router();


router.get("/api/tasks", getTask)
router.post("/api/tasks", createTask)




module.exports = router