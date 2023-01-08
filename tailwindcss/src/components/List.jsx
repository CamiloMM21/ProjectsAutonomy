import React from 'react'
import Navbar from './Navbar';
import mack2  from '../img/Mack4.jpg';
import Search from './Search';

import macks  from '../img/mack.webp.jpg'
import mack4  from '../img/Mack3.jpg'
function List() {
  return (
    <div>
    <Navbar/>
    <Search/>
    <div className='font-bold text-center pt-10 uppercase text-xl  text-gray-200'>
    macbooks de ultima generacion
    <br />
    <div className='font-semibold text-left normal-case text-lg ml-20 mt-24 '>
      Resultados...
      <br />
     <div className=' text-blue-500'>1.999 resultados</div> 
    </div>
    </div>
    <div className=' grid  grid-cols-3 gap-x-8 gap-y-10 ml-20 pr-4 mt-6   '>

    <div className=' '>
      <img src={mack2} alt="" className='grid object-cover w-96 h-48 rounded-lg '/>
    </div>
    <div className=''>
      <img src={macks} alt="" className='grid object-cover w-96 h-48 rounded-lg '/>
    </div>
    <div className=''>
      <img src={mack4} alt="" className='grid object-cover w-96 h-48 rounded-lg'/>
    </div>
    <div className=''>
      <img src={mack4} alt="" className='grid object-cover w-96 h-48 rounded-lg '/>
    </div>
     </div>
  </div>
  )
}

export default List