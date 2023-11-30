import React from 'react'

const Button = ({label, IconURL}) => {
  return (
   <div className='flex  bg-black text-white p-2 rounded-full px-8 p-3 font-medium items-center gap-2'>
     <button className=''> {label}</button>
     
      { IconURL && <img className='w-5 h-5 rounded-full' src={IconURL} alt="arrow_right_icon" />}

   </div>
  )
}

export default Button