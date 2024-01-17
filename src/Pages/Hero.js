import React from 'react'
import { Icons } from '../Assets'

const Hero = () => {
  return (
<div className='flex '>
    <div className='relative'>
        <img src={Icons.Hero} /> 
        <div className='absolute top-[30%] left-[66%] '>
        <div className='p-2 border-[6px] border-black rounded-full'><img src={Icons.programmer} className='rounded-full ' width={200} height={200}/></div>
    </div>
    </div>

    {/* //! second section */}
    
   
    <div className='flex flex-col justify-center  h-screen px-5 '>
        <div className='flex gap-x-5'>
        <h1 className='text-6xl font-bold '>HII,</h1>
        <div className='w-[200px] my-10'>
        <h2 className='text-base'>Welcome to my corner of the internet! I'm Avnish, a frontend developer with a keen eye for design and a love for crafting seamless, user-centric experiences.</h2> 
        </div>
        </div>
        <div className='flex justify-center'>
            <p className='w-[400px] '>I'm not just a coder; I'm a storyteller in the digital realm. I find joy in turning complex ideas into elegant, intuitive, and pixel-perfect websites. My journey in the world of frontend development began</p>
        </div>
        <div className='flex gap-10 justify-center my-5'>
     
            <img src={Icons.linkedin} alt='' className='w-10 h-10 hover:w-12 hover:h-12  transition hover:delay-300'/>
            <img src={Icons.git} alt='' className='w-10 h-10 hover:w-12 hover:h-12  hover:delay-300'/>
            <img src={Icons.mail} alt='' className='w-10 h-10  hover:w-12 hover:h-12  hover:delay-300'/>
    </div>
    </div>
    
 
</div>
  )
}

export default Hero