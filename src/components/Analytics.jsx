import React from 'react'
import Laptop from '../assets/laptop.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#FF9001] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4l sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                
                <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Officiis earum porro expedita explicabo. Minima cupiditate cum possimus accusantium cumque, 
                 quaerat est libero, laboriosam iste totam officiis dolorum odio, praesentium tempora!
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#FF9001]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics