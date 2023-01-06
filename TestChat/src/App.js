import "./style.scss";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './context/AuthContext';




function App() {

  const {currentUser}= useContext(AuthContext);

  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/login"
    />;
  }
  return children
  };


  console.log(currentUser)
  return (
    <BrowserRouter>
    <Routes> 
      <Route path="/">
      <Route
       index 
      element={<ProtectedRoute>
        <Home/>
        </ProtectedRoute>
        }  
       />
       <Route path="login" element={<Login/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
