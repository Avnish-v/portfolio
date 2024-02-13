import React from 'react'
import { Icons } from '../Assets'

const Project = () => {
  return (
    <div className='px-20 my-10  background ' id="Project">
    <h1 className='text-4xl font-semibold '> Pro<span className='under'>ject's</span></h1>
<div className='mt-20 grid grid-flow-row grid-cols-3 gap-5 rounded-xl drop-shadow-cardbox p-5'>
 {[1,2,4,5,6].map((element ,index)=>{
  return <div key={index} className='bg-card rounded-xl p-4 border border-[#E6EBF4] flex flex-col items-center gap-5'>
    <div><img src={Icons.blockApp} width={100} height={100} alt=''/></div>
    <h1 className='text-xl font-medium'> the MO</h1>
    <div className='w-[80%] text-center'>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem</p>
    </div>
  </div>

 })

 } 
</div>
    </div>
  )
}

export default Project