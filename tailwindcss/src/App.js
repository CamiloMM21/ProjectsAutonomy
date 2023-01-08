import Form from './components/Form';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route index element={<List />}/>
      <Route path='/Form' element={<Form />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
