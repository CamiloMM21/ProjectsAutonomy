import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTask } from '../feactures/tasks/taskSlice';
import { Link } from 'react-router-dom';

function TasKsList() {
    
const Dispach = useDispatch();
    const handleDelete =(id)=>{
        Dispach(DeleteTask(id))
    
    }
     const task = useSelector(state=> state.tasks)
     console.log(task)
  return (
    
     <div className='w-4/6  '>
    <header className='flex justify-between items-center py-4'>
        <h1>Tasks {task.length}</h1>
        <Link to='/' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Redirectin to task form</Link>
        
    </header>
   <div className='grid grid-cols-3 gap-4'>
   {task.map(task =>(
        <div key={task.id} className="bg-neutral-800 p-4 rounded-md">

            <header className='flex justyfy-between'>
            <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
            <h3>{task.title}</h3>
           <div className='flex gap-x-2'> 
             <Link to={`/create.task/${task.id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Buid</Link>
           <button onClick={()=>handleDelete(task.id) } className='bg-red-500 px-2 py-1 text-xs rounded-md'>Delete</button>
         
           </div>
            <p>{task.description}</p>
            
            </div>
            </header>
        </div>

    ))}
    </div>
    </div>
  )
}

export default TasKsList