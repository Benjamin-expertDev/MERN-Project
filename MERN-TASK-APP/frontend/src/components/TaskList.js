import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "./Task"
import TaskForm from "./TaskForm"
import { toast } from "react-toastify";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif"

//http://localhost:5000/api/tasks
const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        completed: false
    })
    const {name} =formData

    const handleInputChange = (e)=>{
    const{name, value} = e.target
    setFormData({...formData, [name]:value})
    };

    const getTasks = async() =>{
        setIsLoading(true)
        try {
           const {data} = await axios.get(`${URL}/api/tasks`);
           setTasks(data)
           console.log(data);
           setIsLoading(false)
        } catch (error) {
            toast.error(error.message)
            console.log(error);
           
            setIsLoading(false)
        }
    };
    useEffect(()=>{
        getTasks()},[]        
    )
    const createTask = async(e) =>{
        e.preventDefault()
        if(name===""){
            return toast.error("Input Field cannot be empty")
        }
        try {
            await axios.post(`${URL}/api/tasks`, formData)
            setFormData({...formData, name:""})
            toast.success("Task Added Successfully")
        } catch (error) {
            toast.error(error.message)
        }
    };
    const deleteTask = async(id) =>{
        try {
            await axios.delete(`${URL}/api/tasks/${id}`)
            getTasks()
        } catch (error) {
            toast.error(error.message)
        }
    };
  return (
    <div>
        <h2>Task Manager</h2>
        <TaskForm name={name} handleInputChange={handleInputChange} createTask = {createTask}/>
        <div className="--flex-between --pb">
            <p>
                <b>Total Tasks:</b>0
            </p>
            <p>
                <b>Completed Tasks:</b>0
            </p>
        </div>
        <hr />
        {
            isLoading && (
                <div className="--flex-center">
                    <img src={loadingImg} alt="Loading"/>

                    </div>
            )
        }
        {
            !isLoading && tasks.length === 0?(
                <p className="--py">No task added. Please add a task</p>
            ) : (
                <>
                {tasks.map((task, index)=>{
                    return (<Task key={task._id} task={task} index={index} deleteTask={deleteTask} />)
                })}
                </>          
            )
        }
        
    </div>
  )
}

export default TaskList