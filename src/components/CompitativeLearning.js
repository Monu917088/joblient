import React from 'react'
import img4 from '../images/img4.png'

const CompitativeLearning = () => {
  return (
    <div className='bg-white px-6 py-3 '>
        <p className='text-2xl mb-5 font-bold'>
            Competitive Learning System
        </p>
        <p className='text-xl text-gray-800'>
            Step-by-step process to get you moving towards your Goal.
        </p>
        <div className='flex justify-center'>
            <a className= ' text-blue-500 font-bold' href="#">Learn now </a>
        </div>
        <div>
            <img src={img4}/>
        </div>
    </div>
  )
}

export default CompitativeLearning