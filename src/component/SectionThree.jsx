/* eslint-disable no-unused-vars */
import React from 'react';

export default function SectionThree() {
  return (
    <div>
        <div className='absolute z-0 w-[600px] h-[600px] bg-primary-20 -left-80 rounded-tr-full rounded-br-full bg-opacity-20' id='facility'></div>
        <div className='flex gap-24 '>
            <div className='text-end w-1/2 py-40 pl-20'>
                <h1 className='font-tangerine text-6xl mb-4'>Stop Settling For Less.</h1>
                <h2 className='text-4xl font-bold '>Have an affair with us soon.</h2>
                <p >Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                <div className='flex justify-end pt-9 gap-5'>
                    <a href="/#footer" className='px-5 py-4 border-2 border-solid rounded-xl border-secondary-50 hover:bg-secondary-50 hover:text-white '> Our Location</a>
                    <a href="/#form" className='px-5 py-4  rounded-xl bg-secondary-50 text-white flex gap-3 hover:border-2 hover:border-solid hover:border-secondary-50 hover:bg-transparent hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z"/></svg>
                    <span>Book Now</span>
                    </a>
                </div>
            </div>
            <div className='relative flex flex-col justify-center pt-32 pb-5'>
                <div className='jordy orang aneh '>
                    <div className='relative w-[568px] h-[364px] flex justify-center'>
                        <div className='w-[568px] h-[364px] rounded-2xl border-solid border-primary-90 border-2 static'>
                            <img src="/assets/cafeDepan.png" alt="yolo"  className='absolute -top-3  -left-4'/>
                        </div>
                    </div>
                </div>
                <div className='kenapa ada pagar nya sih jorrr flex justify-end pt-7'>
                    <img src="/assets/pagerJordyAneh.png" alt="pagar" />
                </div>
            </div>
        </div>
    </div>
  )
}
