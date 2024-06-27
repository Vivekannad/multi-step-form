import React from 'react'

const StepOne = ({setNumber}) => {
    const firstStepHandler = () => {
        setNumber((prev) => prev + 1 )
    }
  return (
    <>
       <h2 className='font-bold text-3xl leading-normal'>What is your monthly digital marketing Budget?</h2>
        <div className="options flex flex-col items-center gap-5 text-center w-full my-3">
        <p className='hover:border-2 hover:border-slate-900 hover:text-lg hover:bg-emerald-50 transition-all hover:outline-1 w-full rounded-lg py-1 cursor-pointer' onClick={firstStepHandler}>&lt;  $1,0000/mo</p>
        <p className='hover:border-2 hover:border-slate-900 hover:text-lg hover:bg-emerald-50 transition-all hover:outline-1 w-full rounded-lg py-1 cursor-pointer' onClick={firstStepHandler}>$1000 to $2000</p>
        <p className='hover:border-2 hover:border-slate-900 hover:text-lg hover:bg-emerald-50 transition-all hover:outline-1 w-full rounded-lg py-1 cursor-pointer' onClick={firstStepHandler}>$2000 to $5000</p>
        <p className='hover:border-2 hover:border-slate-900 hover:text-lg hover:bg-emerald-50 transition-all hover:outline-1 w-full rounded-lg py-1 cursor-pointer' onClick={firstStepHandler}>$10000 to $20000</p>
        <p className='hover:border-2 hover:border-slate-900 hover:text-lg hover:bg-emerald-50 transition-all hover:outline-1 w-full rounded-lg py-1 cursor-pointer' onClick={firstStepHandler}>$25000+</p>
        </div>
        </>
  )
}

export default StepOne