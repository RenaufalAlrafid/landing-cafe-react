import React, { useState, ChangeEvent } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // uncomment this if you have API to handle Submit
    // let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     try {
    //         let res = await fetch("/", {
    //         method: "POST",
    //         body: JSON.stringify({
    //         name: name,
    //         email: email,
    //         }),
    //     });
    //     let resJson = await res.json();
    //     if (res.status === 200) {
    //         setName("");
    //         setEmail("");
    //         setMessage("User created successfully");
    //     } else {
    //         setMessage("User not created");
    //     }
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   }
    const handleNameChange = (e) => {
        setMessage('');
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setMessage('');
        setEmail(e.target.value);
    }
    let handleSubmit =  (e) => {
        e.preventDefault();
        setMessage("Your data has been created, Check Email From Us");
    }
    return (
        <div className='pt-24'>
            <h1 className='text-secondary-40 font-bold text-4xl mb-3'>Stay Caffeinated !</h1>
            <h2 className='text-primary-50  text-2xl mb-14'>Join Our Membership Program for Endless Perks</h2>
            <form  className='flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor="Name" className='text-primary-90 mb-1'>Name</label>
                <input type="text" name={name} placeholder='input your name' className=' bg-transparent border-secondary-50 border-solid border-2 rounded-xl  w-80 h-14 py-4 pl-6 placeholder:text-secondary-50 mb-5'  onChange={handleNameChange}/>
                <label htmlFor="emai" className='text-primary-90 mb-1'>Email</label>
                <input type="email" name={email}  placeholder='write down your email' className='bg-transparent border-secondary-50 border-solid border-2 rounded-xl  w-80 h-14 py-4 pl-6 placeholder:text-secondary-50 mb-7' onChange={handleEmailChange} />
                <button className='py-4 px-5 bg-secondary-50 text-neutral-10 rounded-xl w-48' type='submit'>Join Membership</button>
            </form>
            <p className='text-primary-90 mb-1 font-bold text-xl pt-3'>{message ? message : ''}</p>
        </div>
    )
}
