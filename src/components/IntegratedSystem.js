import React from 'react'
import img2 from '../images/img2.jpg'

const IntegratedSystem = () => {
  return (
    <div className='bg-white p-3  '>
       <p className='text-2xl mb-5 font-bold'>Integrated System</p>
       <div className='md:flex'>
        <div className='text-[14px] text-justify'>
            <p className='mb-2'>This system provides users with a one-stop shop for all their job search needs, including resources
                 for preparing for interviews, creating resumes, and applying for jobs .
            </p>
            <p className='mb-2'>
            It also provides a platform for recruiters and interviewers to post jobs, review resumes, and conduct interviews 
            with potential candidates, and receive personalized guidance from experts .
            </p>
            <p className='mb-2'>
            It is designed to help job seekers quickly
             find the perfect job opportunity and make the most of any interview .
            </p>

            <div className='md:flex md:space-x-2'>
                <div >
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>1</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Intern</div>
                    </div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>2</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Fresher</div>
                    </div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>3</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>JobSeeker</div>
                    </div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>4</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Experience</div>
                    </div>
                </div>

                <div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>5</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Recruiter</div>
                    </div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>6</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Interviewer</div>
                    </div>
                    <div className='flex space-x-2 mb-1'>
                        <div className='rounded-full h-[30px] w-[30px] text-center font-semibold text-xl bg-gray-400'>7</div>
                        <div className='bg-gray-400 rounded-md w-[160px]   text-xl font-semibold pl-3'>Learn → Prepare → Challange</div>
                    </div>
                </div>
                <div className='flex  items-center'>
                    <button className='bg-blue-500 mt-3  text-white px-4 font-semibold py-1 text-xl rounded-2xl'>Get Started</button>
                </div>


            </div>
        </div>
        <div>
            <img src={img2}/>
        </div>
       </div>
    </div>
  )
}

export default IntegratedSystem