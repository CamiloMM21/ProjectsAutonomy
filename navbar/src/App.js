import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Doc from './page/Doc';
import Product from './page/Product';
import About from './page/About';
import Sidebar from './components/Sidebar'


const App=()=>{
  return (
   
      <BrowserRouter>
   <Sidebar>
    
      <Routes>

      
      <Route path='/' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/doc' element={<Doc/>}/>

      </Routes>
    </Sidebar>
      </BrowserRouter>

    
  );
}

export default App;
