import React from 'react'
import img1 from '../images/img1.png'

const Platform = () => {
  return (
    <div className='  bg-white p-3 '>
        <div className='text-2xl mb-5 font-bold'>Platform For All_<br></br> Candidate, Recruiters, Interviewer</div>
        <div className='md:flex  space-x-2 text-justify text-[14px]'>
            <div className='sm:mb-2'>
                <div className='mb-3 '>The most reliable platform for recruiter to get technically pre-assessed, immediate joiners, within budget.
                </div>
                <div>By upskilling, a candidate becomes eligible to be included on pre-assessed category and increases their chances of being selected for the role</div>
            </div>
            <div>
                <img src={img1} />
            </div>
        </div>
        <button className='border-2 bg-black text-white border-black rounded-2xl px-4 py-1 font-semibold text-xl'>Get Started Now</button>
    </div>
  )
}

export default Platform