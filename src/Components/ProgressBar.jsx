import React from 'react'

const ProgressBar = ({number}) => {
  return (
    <>
        <div className="progress-parent h-2 my-4 bg-slate-300">
          <div className= {`bg-green-600 h-full transition-all ${number === 1 ? `w-1/3` : number === 2 ? `w-2/3` : `w-screen`}`} ></div>
        </div>
    </>
  )
}

export default ProgressBar


