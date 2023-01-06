import React from 'react'
import  Call from "../img/call.png"
import  Cam from "../img/cam.png"
import  More from "../img/more.png"
import Messages from './Messages';
import Input from './Input';

const Chat =() =>{
  return (
    <div className="chat">
    <div className="chatInfo">
        <span>juliana</span>
        <div className="chatIcons">
        <img src={Call} alt="" />
        <img src={Cam} alt="" />
        <img src={More} alt="" />
        </div>
        
    </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat