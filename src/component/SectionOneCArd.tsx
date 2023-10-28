import React from 'react'
import "../assets/coffe2.png"

export default function SectionOneCArd() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='rounded-xl shadow-black '>
            <img src="/assets/coffe2.png" alt="Cappucino" />
        </div>

        <h3 className='text-xl font-bold'>Capuccino</h3>
        <p className='text-sm text-center text-neutral-90'>The perfect balance of espresso, steamed milk and foam.</p>
    </div>
  )
}
