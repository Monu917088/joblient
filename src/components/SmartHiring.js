import React from 'react'
import img3 from '../images/img3.jpg'

const SmartHiring = () => {
  return (
    <div className='bg-white p-3 md:flex space-x-2'>
        <div className=''>
          <img  src={img3}/>
        </div>
        <div>
            <p className='text-2xl mb-5 font-bold' >Smart Hiring</p>
            <div className='flex space-x-2 mb-2 text-[14px]'>
                <div className='text-blue-500'>→</div>
                <p className='text-justify'>
                    A Smart Hiring System uses algorithms to assess 
                    job applicants and predict their potential for success in the role .
                </p>
            </div>

            <div className='flex mb-2 text-[14px] space-x-2'>
                <div className='text-blue-500'>→</div>
                <p className='text-justify'>
                It looks at factors such as previous experience, qualifications, skills, and 
                performance in interviews to make an informed decision on who to hire .
                </p>
            </div>
            <div className='flex mb-2 text-[14px] space-x-2'>
                <div className='text-blue-500' >→</div>
                <p className='text-justify'>
                It is designed to save time and money by streamlining the recruitment process, giving employers access to a larger pool of potential applicants, and providing customizable
                 reporting tools to help employers make data-driven decisions .
                </p>
            </div>
            <div  className='mt-4 flex md:justify-end'>
          <button className='border-2  border-black rounded-2xl px-4 py-1 font-semibold text-xl'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default SmartHiring