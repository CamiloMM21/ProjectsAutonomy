import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTask, EditTask } from '../feactures/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function TaskForem() {
   const [task,setTask]=useState({
        title:"",
        description:""
    });

const tasks = useSelector((state)=> state.tasks);    
const navigate =useNavigate();
const dispach = useDispatch();
const Paramas = useParams;

 
 useEffect(() => {
    if (Paramas.id){
        setTask(tasks.find((task) => task.id === Paramas.id))

    }
    }, [])

const  handleChan =(e) =>{
    setTask({
        ...task,
        [e.target.name]: e.target.value,
        
    });
};
const handleSubmit =(e)=>{
    e.preventDefault();

    if(Paramas.id){
        dispach(EditTask(task))
    }else{
  dispach(addTask({
    ...task,
    id: uuid(),
  }));
}
  navigate("/create.task")

} ;   
  return (
    <form  onSubmit={handleSubmit}>
        <input name="title" placeholder='title' onChange={handleChan} value={task.title}/>
        <textarea name="description" placeholder='description' onChange={handleChan} value={task.description}></textarea>
        <button>save</button>
    </form>
  )

}
export default TaskForem;