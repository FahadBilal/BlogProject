import React from 'react'
import Banner from './Banner'
import Container from './Container'

function Homepage() {
  return (
     <>
      <div className='sm:px-6 sm:mt-16 mt-12 relative mb-16'>
        <Banner/>

        <div className='bg-white dark:bg-black shadow-gray-light shadow-xl dark:shadow-none dark:border dark:border-white sm:px-6 px-2 sm:py-6 py-2 sm:w-[450px] w-[300px] absolute bottom-[-40px] sm:left-20 left-2 duration-200 rounded-xl'>
          <button className='bg-blue text-white  px-2 py-1 rounded-md text-[12px] mb-3'>Technology</button>
          <h1 className='sm:text-[28px] text-[20px] text-black dark:text-white font-bold leading-tight mb-3 duration-200'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
          
          <div>
            <img src="/images/Image (7).png" alt="" className='w-8 inline-block mr-4' />
            <span className='sm:mr-6 mr-4 text-black dark:text-white text-opacity-50 sm:text-[16px] text-[12px] duration-200 '>Jason Francisco</span>
            <span className=' text-black dark:text-white text-opacity-50 sm:text-[16px] text-[12px] duration-200 '>October 22, 2024</span>
          </div>

        </div>
     </div>
     
     <Container/>
     </>


  )
}

export default Homepage
