import './App.css';
import{useSelector} from  "react-redux"
import TaskForem from './components/TaskForem';
import TasKsList from './components/TasKsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="bg-zinc-900 h-scren text-white " >
    <div className='flex items-center justify-center h-full'>
    <BrowserRouter>
    <Routes>
      <Route path='/'>
       <Route  index element={<TaskForem/>}/>
      <Route path='/create.task'element={<TasKsList/>}/> 
      <Route path='/create.task/:id'element={<TaskForem/>}/> 
      </Route>
      
    </Routes>
    </BrowserRouter>
    </div>
    
    </div>
   
  );
}

export default App;
