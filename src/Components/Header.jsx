import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const Header = ({setNumber,number}) => {
    const backHandler = () => {
        if(number > 1){
            setNumber((num) => num - 1 )
        }
    }
  return (
    <>
    <header className='flex justify-between w-full h-5 bg-slate-100 my-1 '>
        <div className='Back mx-5 flex items-center space-x-1 cursor-pointer' onClick={backHandler}>
            <IoMdArrowBack/>
            <p>Go back</p>
        </div>
        <div className='Exit mx-5 flex items-center space-x-1'>
            <p>Exit</p>
            <MdOutlineCancel/>
        </div>
    </header>
    </>
  )
}

export default Header