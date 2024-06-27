import React from 'react'
import Button from './Button'

const Stepthree = ({setNumber}) => {
    const clickHandler = () => {
        setNumber(1)
    }
  return (
    <>
         <div className="box md:w-24 md:h-24 bg-slate-200"> 
        </div>
        <h1 className='font-bold text-3xl'>Your request for a proposal has been submitted</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officia, rem necessitatibus harum aut eveniet impedit. Sequi quibusdam vel ducimus?</p>
        <Button text= 'Return Home' clickHandler={clickHandler}/>
    </>
  )
}

export default Stepthree