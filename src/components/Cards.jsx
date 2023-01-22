import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/"></img>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>£149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                </div>
                <button className='bg-[#FF9001] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/"></img>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>£199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10GB</p>
                </div>
                <button className='bg-black text-[#FF9001] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:shadow-2xl duration-300 hover:scale-105'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/"></img>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>£299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 20GB</p>
                </div>
                <button className='bg-[#FF9001] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards