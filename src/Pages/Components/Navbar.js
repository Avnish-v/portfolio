import React from 'react'
import { Icons } from '../../Assets'

const Navbar = () => {


  return (
  <div className=' sticky flex justify-around  items-center py-5 bg-[#F3F5FA03] border-b '>
 
        <img src={Icons.Logo} alt='logo' width={40} height={30}  />
<div className='flex items-center gap-20'>
    <ul className='flex gap-10 list-none cursor-pointer text-black text-base font-semibold '>
       <li className='hover:text-blue-800'>Skills</li>
       <li className='hover:text-blue-800'>Project</li>
       <li className='hover:text-blue-800'>About us</li>
       <li className='hover:text-blue-800'>Contact</li>
    </ul>
    <div className='w-[100px] h-9 rounded-md bg-blue-800 flex justify-center items-center'>
    <button className='text-white font-medium' >Resume</button>
    </div>
    </div>

  </div>
  )
}

export default Navbar