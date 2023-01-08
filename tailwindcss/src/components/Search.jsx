import React from 'react'

function Search() {
  return (
    <div className=" flex justify-center left-72 flex justify-start  ">
        <div className='flex justify-center order-1  bg-white border border-black cursor-pointer'>
     <svg className=" hover:text-black text-slate-500 h-5 w-5" viewBox="0 0 20 20 " fill="currentColor">
        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
      </svg></div>
    <input type="text" placeholder="Search" className=" hover:bg-slate-300  w-96" radiu/>
   </div>
  )
}
//max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2
export default Search