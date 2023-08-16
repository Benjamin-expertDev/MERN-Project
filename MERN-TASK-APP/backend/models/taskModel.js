const mongoose =require("mongoose")

const taskSchema = mongoose.Schema(

{
    name:{
        type: String,
        required:[true, "Please input a task"]
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    }
},
{
    timestamps:true
}
)

const Task = mongoose.models("Task", taskSchema)

module.exports = Task