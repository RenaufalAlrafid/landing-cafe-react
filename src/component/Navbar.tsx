import React from 'react'

export default function Navbar() {
    return (
        <nav className='fixed flex flex-wrap bg-primary-base w-full justify-around z-50'>
            <div id='logo' className='bg-transparent py-6 pr-16 pl-24'>
                <h1 className='bg-transparent text-2xl font-light'>RA Coffee & Eatery</h1>
            </div>
            <div className='flex flex-wrap gap-24 py-6 px-12 text-secondary-100'>
                <a href="/" className='font-bold text-xl'>Home</a>
                <a href="/" className='font-bold text-xl'>Menu</a>
                <a href="/" className='font-bold text-xl'>Facility</a>
                <a href="/" className='font-bold text-xl'>Reservation</a>
            </div>
            <div className='py-3 pr-28 pl-20 my-4 '>
                <a href="/" className='border-solid rounded-xl border-secondary-60 text-secondary-60 border-2  px-5 py-4'>Join Member</a>
            </div>
        </nav>
    )
}
