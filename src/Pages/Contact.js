import React from 'react'

const Contact = () => {
  return (
    <div className='pb-10' id="contact">
          <div className='px-20 my-10  background '>
    <h1 className='text-4xl font-semibold '>Cont<span className='under'>act</span></h1>
    </div>
<div className='flex justify-center '>
<form action="https://getform.io/f/7f90499c-27d8-416c-a92a-6d05934f3b9d" className='border rounded-lg p-10' method="POST">
    <div className='flex flex-col gap-5'>
 <div className='flex flex-col'>
    <label>Name</label>
    <input type="text" name="name" placeholder='Name' className='w-[400px] rounded-md h-9 border border-gray-600 ' />
 </div>
 <div className='flex flex-col'>
    <label>Email</label>
    <input type="email" name="email" placeholder='email' className='w-[400px] rounded-md h-9 border border-gray-600 '/>
 </div>
 <div className='flex flex-col'>

    <label>Message</label>
    <textarea type="text" name="message" placeholder='Additional information' className='w-[400px] rounded-md h-[150px] border border-gray-600 '  />
 </div>
 <div className='flex justify-center'>
    <button className='w-[200px] h-11 rounded-md bg-[#5724E7] text-white font-semibold' type="submit">Send</button>
 </div>
    </div>
</form>
</div>
</div>
  )
}

export default Contact