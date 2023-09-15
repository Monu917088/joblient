import React from 'react'
import img8 from '../images/img8.png'

const AdvancedSystem = () => {
  return (
    <div className='bg-white md:flex p-3  space-x-4 '>
        <div className='md:w-2/3 sm:mb-3'>
        <p className='text-2xl mb-5 font-bold'>Advanced System Design</p>

        <p className='text-[14px] text-justify mb-3'>
        This course is designed to help you develop a strong foundation in design principles and practices, allowing you to create designs with clarity and purpose. You will learn to analyze and solve design problems, create effective system and workflows, 
        and be able to communicate your design decisions to stakeholders.
        </p>
        <div>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Learn Design Concepts</p>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Inbuilt Design Editor</p>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Create Design</p>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Practice Existing Designs</p>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Take Design Test</p>
            <p className='text-[16px] font-semibold'><span className='mr-1'>→</span>Solve Open Design Problems</p>
        </div>
        <div  className='mt-3 flex md:justify-end'>
          <button className='border-2  border-black rounded-2xl px-4 py-1 font-semibold text-xl'>Get Started</button>
        </div>

        </div>
        <div>
          <img className='w-[1000px] '  src={img8}/>
        </div>
    </div>
  )
}

export default AdvancedSystem