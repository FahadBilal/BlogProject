import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea'

function Form() {
  return (
    <div>
      <h1 className='text-black dark:text-white text-[36px] font-bold font-sans text-center lg:text-left '>Get In Touch  </h1>
      <p className='mt-2 text-black dark:text-white text-opacity-90 font-sans text-center lg:text-left '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nihil?</p>
      <div className='bg-white dark:bg-black dark:border dark:border-white sm:w-[600px] shadow-xl shadow-black  px-6 py-6 rounded-xl mt-8'>
      <form action="" className='flex flex-col gap-4'>
            <Input
                label="First Name"
                placeholder="Enter First Name"
            />
            <Input
                label="Last Name"
                placeholder="Enter Last Name"

            />
        
            <Input
                label="Email"
                type="email"
                placeholder="Enter Email"

            />
            <Input
                label="Phone"
                type="text"
                placeholder="Enter Phone No"

            />
            <Textarea
                label="Message"
                placeholder="Enter Message..."
                rows="5"
                cols="30"
            />
            <Button 
            children={"Send"}
            />
            
      </form>
      </div>
    </div>
  )
}

export default Form
