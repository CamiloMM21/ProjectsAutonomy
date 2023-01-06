import React from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../data/firebase'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {currentUser} = useContext(AuthContext)


  return (
    <div className='navbar'>
        <span className="logo">Chat commerce</span>
        <div className="user">
            <img src={currentUser.phothoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar