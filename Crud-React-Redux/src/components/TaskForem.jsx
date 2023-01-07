import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTask, EditTask } from '../feactures/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function TaskForem() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const tasks = useSelector((state) => state.tasks);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const Paramas = useParams;




  const handleChan = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,

    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Paramas.id) {
      dispach(EditTask(task))
    } else {
      dispach(addTask({
        ...task,
        id: uuid(),
      }));
    }
    navigate("/create.task")

  };
  useEffect(() => {
    if (Paramas.id) {
      setTask(tasks.find((task) => task.id === Paramas.id))

    }
  }, [Paramas.id, tasks])
  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4 mb-2'>
      <label htmlFor="title" className='block text-xs font-bold '>Task:</label>
      <input name="title" placeholder='title' onChange={handleChan} value={task.title} className='w-full p-2 rounded-md bg-zinc-600 mb-2' />

      <label htmlFor="description" className='block text-xs font-bold mb-2'>Description:</label>
      <textarea name="description" placeholder='description' onChange={handleChan} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'></textarea>
      <button className='bg-indigo-600 px-2 py-1'>save</button>
    </form>
  )

}
export default TaskForem;