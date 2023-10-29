/* eslint-disable no-unused-vars */
import React from 'react';



export default function MenuCard(props) {
  return (
    <div className='flex flex-col w-48 ' >
        <div className='w-48'>
            <img src={"/assets/" + props.img} alt="menu" className='object-cover' />
        </div>
        <div className='flex justify-between'>
            <h1 className='text-primary-0 font-bold '>{props.title}</h1>
            <h1 className='text-primary-0 font-bold '>$ {props.price}</h1>

        </div>
    </div>
  )
}
