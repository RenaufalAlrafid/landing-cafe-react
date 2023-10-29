/* eslint-disable no-unused-vars */
import React from 'react';

export default function SectionComment() {
  return (
    <div className='px-20'>
        <div className='absolute z-0 w-[600px] h-[600px] bg-primary-20 -right-80 rounded-tl-full rounded-bl-full bg-opacity-20 '></div>
        <h1 className='text-4xl text-secondary-40 font-bold'>
        Unbeatable Quality,<br></br>
        <div className='flex'>
            <div className='border-b-2 border-solid border-secondary-60 pb-4'>
            Unforgettable E
            </div>
            xperience!
        </div> 
        </h1>
        <div className='flex gap-6 pt-9 pb-24 justify-around '>
            <div className='flex-col gap-7 rounded-2xl shadow-xl bg-primary-base pb-8'>
                <div className='w-full mb-7 px-9 '>
                    <img src="/assets/petik1.png" alt="petik" />
                </div>
                <div className='text-center w-full px-20 mb-7'>
                    <p className='text-xl text-center text-primary-100'>Excellent service and tasty food with reasonable price!</p>
                </div>
                <div className='w-full flex justify-end px-9'>
                    <img src="/assets/petik2.png" alt="petik" />
                </div>
                <div className='px-20 w-full text-center'>
                    <p className='text-success-80 font-bold text-lg'>Nguyen Shane</p>
                    <p className='text-neutral-100'>January 1, 2023</p>
                </div>
            </div>
            <div className='flex-col gap-7 rounded-2xl shadow-xl bg-primary-40 pb-8 pt-5'>
                <div className='w-full mb-7 px-9 '>
                    <img src="/assets/petik3.png" alt="petik" />
                </div>
                <div className='text-center w-full px-20 mb-7'>
                    <p className='text-xl text-center text-primary-base'>One of the best place to visit and hang out. Good service and lot of spots to take a photo</p>
                </div>
                <div className='w-full flex justify-end px-9'>
                    <img src="/assets/petik4.png" alt="petik" />
                </div>
                <div className='px-20 w-full text-center'>
                    <p className='text-success-10 font-bold text-lg'>Cooper Kristin</p>
                    <p className='text-neutral-10'>January 1, 2023</p>
                </div>
            </div>
            <div className='flex-col gap-7 rounded-2xl shadow-xl bg-primary-base pb-8'>
                <div className='w-full mb-7 px-9 '>
                    <img src="/assets/petik1.png" alt="petik" />
                </div>
                <div className='text-center w-full px-20 mb-7'>
                    <p className='text-xl text-center text-primary-100'>This place is where you can got a good atmosphere and good food.</p>
                </div>
                <div className='w-full flex justify-end px-9'>
                    <img src="/assets/petik2.png" alt="petik" />
                </div>
                <div className='px-20 w-full text-center'>
                    <p className='text-success-80 font-bold text-lg'>Miles Esther</p>
                    <p className='text-neutral-100'>January 1, 2023</p>
                </div>
            </div>
        </div>
    </div>
  )
}
