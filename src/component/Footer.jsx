/* eslint-disable no-unused-vars */
import React from 'react';

export default function Footer() {
  return (
    <div className='bg-primary-100 flex justify-around py-10' id='footer'>
        <div id='logoSosmed' className='flex flex-col gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f0e8d6" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f0e8d6" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#f0e8d6" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z"/></svg>
        </div>
        <div  id='location' className='flex-col flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f0e8d6" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
          <span className='font-bold text-2xl text-white mt-2'>Location</span>
          <span className='text-white'>Jl. Kaliurang KM 9.5</span>
        </div>
        <div  id='facilities' className='flex-col flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f0e8d6" d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/></svg>
          <span className='font-bold text-2xl text-white mt-2'>Facilities</span>
          <span className='text-white'>Wifi, Meeting Room, Smoking Area</span>
        </div>
        <div  id='facilities' className='flex-col flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="#f0e8d6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14ZM32.608 7A6.996 6.996 0 0 1 36 13a6.996 6.996 0 0 1-3.392 6M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8ZM44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496"/></svg>
          <span className='font-bold text-2xl text-white mt-2'>About Us</span>
          <span className='text-white'>Get to know us more.</span>
        </div>

        <div className='h-full flex flex-col justify-center py-9'>
          <h1 className='text-2xl text-white'>RA Coffee & Eatery</h1>
        </div>
    </div>
  )
}
