import React from 'react'
import Banner from './Banner'
import Container from './Container'

function Blog() {
  return (
    <>
    <div className='mt-10 flex flex-col items-center gap-2'>
        <h1 className='text-black dark:text-white font-bold text-[24px]'>Page Title</h1>
        <ul className='flex items-center gap-4'>
            <li className='text-opacity-70 text-black dark:text-white'>Home</li>
            <li className='text-opacity-70 text-black dark:text-white'>Link One</li>
        </ul>
    </div>
    <div className='sm:px-6 sm:mt-16 mt-12  mb-12 relative'>     
     <Banner>
      <div className='absolute sm:top-[50%] top-[25%] sm:left-10 left-[6px]'>
          <button className='bg-blue text-white px-2 py-1 rounded-md text-[12px] mb-3'>Technology</button>
          <h1 className='md:text-[36px] sm:text-[28px] text-[20px] text-white font-bold leading-tight mb-3 duration-200'>The Impact of Technology on the <br /> Workplace: How Technology is Changing</h1>
          
          <div>
            <img src="/images/Image (8).png" alt="" className='w-8 inline-block mr-4' />
            <span className='sm:mr-6 mr-4 text-white text-opacity-50 sm:text-[16px] text-[12px] duration-200 '>Jason Francisco</span>
            <span className=' text-white text-opacity-50 sm:text-[16px] text-[12px] duration-200 '>October 22, 2024</span>
          </div>

        </div>
      </Banner>
    </div>

    <Container/>
    </>
  )
}

export default Blog
