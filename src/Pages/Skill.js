import React from 'react'
import { Icons } from '../Assets'

const Skill = () => {
    const skill  = [{
        name : "React" ,
        img :  Icons.React ,
    },{
        name : "Javascript" ,
        img : Icons.js ,
    }, {
        name :  "Tailwind", 
        img :  Icons.tailwind
    },
    {
        name :  "CSS", 
        img :  Icons.css
    },
    {
        name :  "Typescript", 
        img :  Icons.ts
    }
]
  return (
    <div className='px-2 md:px-20 ' id="Skills">
<h1 className='text-4xl font-semibold '> Ski<span className='under'>ll's</span></h1>
<div className='my-10 flex justify-evenly '>
    {skill.map((element , index)=>{
        return<div className='flex flex-col  items-center' key={index}>
        <div className='p-2 border-2 rounded-full'>
        <img src={element.img} className='w-12 h-12 sm:w-14 sm:h-14  object-contain' alt="" /> 
        
    </div>
    <div className='mt-5 '>
        <p className='text-xl font-medium hidden md:block'>{element.name}</p>
    </div>
    </div>
    })}
</div>

<div className='flex flex-col md:flex-row gap-2 mb-5'>
    <h2 className='text-base  font-semibold'>Other skill's -:</h2>
    <p className='text-base font-medium'>  Next Js<b>|</b>  Redux  <b>|</b> Git & Github <b>|</b> React-Router <b>|</b>Headless UI<b>|</b>Rechart<b>|</b>Html <b>|</b>DSA <b>|</b>C & C++ </p>
</div>
    </div>

  )
}

export default Skill