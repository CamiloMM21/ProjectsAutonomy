import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './view/Dashboard';
import About from './view/About';
import List from './view/List';
import Product from './view/Product';
import Analytics from './view/Analytics';
import Comment from './view/Comment';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/analytics' element={<Analytics/>}/>
      <Route path='/comment' element={<Comment/>}/>
      </Routes>
      </Sidebar>
      </BrowserRouter>
  
  );
}

export default App;
