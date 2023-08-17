const Task = require("../model/taskModel");

// Create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Get a single task
const getTask = async (req, res) => {
    try {
        const { id } = req.params; // Fix the typo here: req.params instead of res.params
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json(`No task was found with the id:${id}`)
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
};
