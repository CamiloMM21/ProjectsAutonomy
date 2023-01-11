import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        
        <div className="flex   ">
           <div style={{width: isOpen ? "200px" : "50px"}} className="bg-black text-white h-[44vh] w-[200px]
           ease-[] opacity-80 ease-out duration-300 rounded-br-lg">
               <div className="flex items-center pl-2 pb-6  ">
                   <h1 style={{display: isOpen ? "block" : "none"}} className=" text-[30px]">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="flex text-2xl hover:text-cyan-600 pt-2 ml-[50px] ">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="flex  text-white pl-2 gap-2 font-medium text-xl pb-6 transition duration-300 hover:bg-cyan-600 hover:text-black" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="text-[20px]">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='w-[100%] p-[20px]'>{children}</main>
         
        </div>
    );
};

export default Sidebar;