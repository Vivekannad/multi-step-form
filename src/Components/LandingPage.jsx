import React, { useState } from 'react'
import Header from './Header'
import ProgressBar from './ProgressBar'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Stepthree from './Stepthree'

const LandingPage = () => {
    const [number, setNumber] = useState(1)
  return (
    <>
    <Header setNumber={setNumber} number = {number}/>
    <ProgressBar number={number}/>
     <main className='flex flex-col items-center gap-4 my-9'>
     <div className='w-1/3 flex flex-col items-center gap-5 text-center'>
     <h1 className='font-bold text-3xl'>Step # {number}</h1>
     {number === 1 ? 
    <StepOne  setNumber={setNumber}/> : number === 2?
    <StepTwo setNumber = {setNumber}/> : 
    <Stepthree setNumber={setNumber}/>}
    </div>
    </main>
    </>
  )
}

export default LandingPage