import React from 'react'
import { star } from '../assets/icons'




const ProdCard = ( {imgURL, name, price}) => {
  return (
    <div className='main-flex-card'>
      <div className='flex flex-col max-sm:w-full rounded-2xl w-full bg-card bg-center bg-cover border-opacity-0 max-w-[300px] max-h-[300px] place-items-center'>
          <img src={imgURL} alt={name}
          className= 'w-[100%] h-[100%] max-w-[280px] object-cover items-center hover:scale-125  hover:rotate-12 transition-all ease-in-out duration-500'
          />
      </div>

      <div className='flex'>
        <img
        src={star}
        alt="star icon"/>
        <p className='text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>

      <h2 className='mt-2 text-2xl leading-normal font-semibold'>{price}</h2>
      <h2 className='text-coral-red leading-normal mt-2 font-semibold text-lg'>{name}</h2>
    </div>
  )
}

export default ProdCard