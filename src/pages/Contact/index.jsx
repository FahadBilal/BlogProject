import React from 'react'
import Image from './Image'
import Form from './Form'

function Contact() {
  return (
    <div className='bg-skyBlue dark:bg-black mt-10 mb-10 py-10'>
    <div className='grid lg:grid-cols-2 place-content-center sm:px-6'>
    <Form/>
    <Image/>
    </div>
    </div>
  )
}

export default Contact
