import React from 'react'
import Form from './Form'
import ThemeBtn from '../../components/ThemeBtn'

function Login() {
  return (
    <div className='bg-skyBlue dark:bg-black  sm:dark:py-[84.5px] sm:py-[86.5px] py-10 flex justify-center items-center sm:px-6 px-2 relative'>
        <Form/>
        <ThemeBtn
          className='absolute sm:right-10 right-6 sm:top-5 top-2'
        />
    </div>
  )
}

export default Login
