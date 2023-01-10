import React from 'react';
import  List  from "../img/List.png"
import   Produ from "../img/Produ.png"
import  Nail from "../img/Nail.png";

import {NavLink }  from 'react-router-dom';


const Sidebar=({children}) =>{
    const Listado=[
        {
        path:"/",
        name:"About",
        ico:<Produ/>
        },
        {
            path:"/doc",
            name:"Doc",
            icon:<Nail/>
            },{
                path:"/product",
                name:"Product",
                icon:<Produ/>
                }
      ];
 
  return (
    <div className='container'>
        <div className='sidebar'>
            <div className='top_section'>
                <h1 className='logo'>Logo</h1>
                <div className='bars'>
                    <List/>
                </div>
            </div>
          
            {
                Listado.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            } 

        </div>
        <main>{children}</main>

    </div>
  )
}

export default Sidebar;