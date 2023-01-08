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
    <div className='font-bold text-center mt-16 uppercase text-xl  text-gray-200'>
    macbooks de ultima generacion
    <br />
    <div className='font-semibold text-left normal-case text-lg ml-20 mt-14 max-sm:ml-4 '>
      Resultados...
      <br />
     <div className=' text-blue-500'>4 resultados</div> 
    </div>
    </div>
    <div className=' grid  xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-4 ml-20 max-sm:ml-4 pr-4 mt-2  md:grid-cols-3 sm:grid-cols-2 lg:grid-rows-3  max-sm:grid-cols-1 '>

    <div className=' border rounded-lg hover:bg-gray-400'>
      <img src={mack2} alt="" className=' grid object-cover w-full h-48 rounded-lg '/>
      
      <dd className="text-yellow-500 flex items-center cursor-pointer">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current ">
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>4.89 <span className="text-slate-300 font-normal">(134)</span></span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center">
          
          <svg  width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-800 dark:text-slate-800 " aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          Collingwood, Ontario
        </dd><h1 className='relative left-2 bottom-[70px] font-medium underline hover:text-blue-900 text-blue-800 cursor-pointer'><p>Mas Informacion...</p></h1>
    </div>
    <div className='border-2 rounded-lg hover:bg-gray-400'>
      <img src={macks} alt="" className=' grid object-cover w-full h-48 rounded-lg '/>
      <dd className="text-yellow-500 flex items-center cursor-pointer ">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current">
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>4.89 <span className="text-slate-400 font-normal">(134)</span></span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center">
       
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-800 dark:text-slate-800 " aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          Collingwood, Ontario
        </dd><h1 className='relative left-2 bottom-[70px] font-medium underline hover:text-blue-900 text-blue-800 cursor-pointer'><p>Mas Informacion...</p></h1>
    </div>
    <div className='border  rounded-lg hover:bg-gray-400'>
      <img src={mack4} alt="" className=' grid object-cover w-full h-48 rounded-lg'/>
      <dd className="text-yellow-500 flex items-center cursor-pointer ">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current ">
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>4.89 <span className="text-slate-400 font-normal">(134)</span></span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center">
          
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-800 dark:text-slate-800 " aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          Collingwood, Ontario
        </dd><h1 className='relative left-2 bottom-[70px] font-medium underline hover:text-blue-900 text-blue-800 cursor-pointer'><p>Mas Informacion...</p></h1>
    </div>
    <div className='border  rounded-lg hover:bg-gray-400'>
      <img src={mack4} alt="" className=' grid object-cover w-full h-48 rounded-lg '/>
      <dd className="text-yellow-500 flex items-center cursor-pointer ">
          <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current ">
            <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>4.89 <span className="text-slate-400 font-normal">(134)</span></span>
        </dd>
        <dt className="sr-only">Location</dt>
        <dd className="flex items-center">
         
          
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-800 dark:text-slate-800 " aria-hidden="true">
            <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
            <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
          </svg>
          Collingwood, Ontario
        </dd><h1 className='relative left-2 bottom-[70px] font-medium underline hover:text-blue-900 text-blue-800 cursor-pointer'><p>Mas Informacion...</p></h1>
    </div>
     </div>
  </div>
  )
}

export default List