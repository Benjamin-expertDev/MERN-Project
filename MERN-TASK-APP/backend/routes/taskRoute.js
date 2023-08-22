const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTask, getTasks, deleteTask, updateTask } = require("../controllers/taskController");
const router = express.Router();


router.get("/", getTasks)
router.post("/", createTask)
router.get("/:id", getTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)


module.exports = router