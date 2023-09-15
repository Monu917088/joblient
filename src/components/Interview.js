import React from 'react'
import img5 from '../images/img5.jpg'

const Interview = () => {
  return (
    <div className='bg-white p-3  '>
        <p className='text-2xl mb-5 font-bold'>Interview Platform</p>
        <p className='text-[16px] font-semibold' >Create Interview Question</p>
        <p className='text-[16px] font-semibold'>create & Share The Interview</p>
        <p className='text-[16px] font-semibold'>Record The Interview & Score</p>
        <div className='flex justify-end mb-3'>
            <a className='text-[16px] text-blue-500 font-bold' href='#'> Get Started →</a>

        </div>
        <div>
            <img  height="800px" width="800px" src={img5}/>
        </div>

    </div>
  )
}

export default Interview