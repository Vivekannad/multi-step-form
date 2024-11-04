import React, { useState } from 'react'
import Header from './Header'
import ProgressBar from './ProgressBar'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import Stepthree from './Stepthree'
import ExitPage from './ExitPage'

const LandingPage = () => {
    const [number, setNumber] = useState(1)
  return (
    <>
    <Header setNumber={setNumber} number = {number}/>
    {number > 0 && 
    <ProgressBar number={number}/>}
     <main className='flex flex-col items-center gap-4 my-9'>
     <div className='w-1/3 flex flex-col items-center gap-5 text-center'>
     {number > 0 && 
     <h1 className='font-bold text-3xl'>Step # {number}</h1>
}
     {
      (() => {
        if(number >= 0){
          switch (number) {
            case 1:
              return <StepOne setNumber={setNumber} />;
            case 2:
              return <StepTwo setNumber={setNumber} />;
            case 3:
              return <Stepthree setNumber={setNumber} />;
            // default:
            //   return "Error";
          }
        } else {
          return <ExitPage setNumber={setNumber} />;
        }
      })()
     }
     {/* {number === 1 ? 
    <StepOne  setNumber={setNumber}/> : number === 2?
    <StepTwo setNumber = {setNumber}/> : number === 3 ?
    <Stepthree setNumber={setNumber}/> : 
    <ExitPage/>
    } */}
    </div>
    </main>
    </>
  )
}

export default LandingPage