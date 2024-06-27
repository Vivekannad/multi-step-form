import React, {useState } from 'react'
import Button from './Button';
import { FaLock } from "react-icons/fa6";

const StepTwo = ({setNumber}) => {
    const [inputFields, setInputFields] = useState({
        name:'',
        email:'',
        phone:''
    })
    const clickHandler = () => {
        if(inputFields.name === '' || inputFields.email === '' || inputFields.password === ''){
            alert('Fill the fields')
        }
          else  if(!inputFields.email.includes('@')){
            alert('put email in correct format')
        }
        else{
            setNumber((prev) => prev + 1 )
        }
    }
    const inputChangeHandler = (e) => {
        setInputFields({
            ...inputFields,
            [e.target.name]: e.target.value
        })
    }
  return (
    <>
        <h2 className='font-bold text-3xl'>Details</h2>
        <p>We're thrilled to have you make business with us. Please let us know the best way to reach you.</p>
        <form netlify>
            <div className='min-w-full text-left my-3'>
                <label htmlFor="name" >Name*</label>
                <input type="text" name='name' className='block  w-full bg-gray-100 border-2 outline-none' value={inputFields.name} onChange={inputChangeHandler}/>
            </div>
            <div className='parent-dev flex gap-2 text-left my-3'>
            <div className=''>
                <label htmlFor="email">Email*</label>
                <input type="email" name='email' className='block w-full bg-gray-100 border-2 outline-none' value={inputFields.email} onChange={inputChangeHandler}/>
            </div>
            <div>
                <label htmlFor="phone">Phone*</label>
                <input type="number" name='phone' className='block w-full bg-gray-100 border-2 outline-none' value={inputFields.phone} onChange={inputChangeHandler}/>
            </div>
            </div>
            <div className='text-left my-3'>
                <label htmlFor="opinion">Anything else you'd like to share</label>
                <input type="text" name='opinion' className='block w-full bg-gray-100 border-2 outline-none' />
            </div>
        </form>
            <Button text= 'Send request' clickHandler={clickHandler}/>
            <div className='flex items-center gap-2'>
                <FaLock/>
                <p className='font-light text-s'>We promise to never share you personal information</p>
            </div>
    </>
  )
}

export default StepTwo