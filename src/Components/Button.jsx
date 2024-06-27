import React from 'react'

const Button = ({text,clickHandler}) => {
  return (
    <>
        <button className='p-2 bg-green-700 text-white'
        onClick={clickHandler}
        >
            {text}
        </button>
    </>
  )
}

export default Button