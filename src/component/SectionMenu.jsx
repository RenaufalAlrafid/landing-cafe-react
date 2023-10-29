/* eslint-disable no-unused-vars */
import React from 'react';
import ListMenu from './ListMenu'

export default function SectionMenu() {
  return (
    <div className='bg-primary-80 pt-16 flex flex-col gap-14' id='menu'>
        <h1 className='text-center text-primary-base font-bold text-4xl'>Taste Our Exciting Drinks and Bites!</h1>
        <ListMenu></ListMenu>
    </div>
  )
}
