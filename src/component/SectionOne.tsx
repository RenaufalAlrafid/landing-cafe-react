import React from 'react'
import SectionOneCArd from './SectionOneCArd'

export default function SectionOne() {
  return (
    <div className='flex '>
        <div className='pr-16 pl-14 pb-16 pt-12'>
            <h1 className='font-tangerine font-bold text-6xl py-2 text-secondary-40'>Start Your Day Right</h1>
            <h2 className='font-bold text-2xl py-2 text-secondary-40'>Came as our guests, leave as a friend.</h2>
            <p className='py-2 text-neutral-80'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. </p>
            <div className='flex'>
                <SectionOneCArd></SectionOneCArd>
                <SectionOneCArd></SectionOneCArd>
                <SectionOneCArd></SectionOneCArd>
                <SectionOneCArd></SectionOneCArd>
            </div>
            <h2 className='font-bold text-2xl pt-11 pb-5 text-primary-90'>Be our member and get free <span className='text-secondary-40'>1 Americano</span> right away! </h2>
            <a href="/" className='bg-secondary-50 px-5 py-4 text-white rounded-xl hover:bg-primary-30 shadow-xl mt-5'> Join Membership</a>
        </div>
        <div className='bg-coffe1 bg-cover bg-bottom w-full rounded-l-3xl bg-no-repeat flex' >
          <div className=' bg-gradient-to-b from-transparent via-transparent to-black bg-cover w-full rounded-l-3xl bg-no-repeat flex  pb-14 px-3 flex-col justify-end'>
            <p className='text-white mb-2'>January’s Coffee of the Month:</p>
            <p className='text-white text-5xl'>El Signature</p>
          </div>
            
        </div>
        
    </div>
  )
}
