import React from 'react'

export default function SectionTwo() {
  return (
    <div className='flex'>
        <div className='flex justify-center items-center w-1/2 py-20'>
            <div className='jordy orang aneh '>
                <div className='relative w-[450px] h-[250px] flex justify-center'>
                <div className='w-[420px] h-[220px] rounded-2xl border-solid border-primary-90 border-2 static'>
                    <img src="/assets/beverage.png" alt="bevrage"  className='absolute -bottom-1  -left-4'/>
                </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center w-1/2'>
            <div className='text-center'>
                <h1 className='text-4xl mb-5 text-primary-90'><u>Good Taste</u> Matters</h1>
                <a href="/" className='py-4 px-5 border-solid border-2 rounded-xl border-primary-60 hover:bg-primary-60 hover:text-white text-secondary-60 '>Check Our Menu</a>
            </div>
        </div>
    </div>
  )
}
