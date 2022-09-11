import React from 'react'

import logo from "../assets/img/logo.jpg";

const WelcomePage = () => {
    return (
        <div>
            <div className='flex items-center'>
                <img src={logo} alt='Logo' className='h-16 w-16' />
                <p
                    className='text-xl font-bold bg-clip-text bg-gradient-to-l from-yellow-400 via-red-500 to-sky-400 text-transparent'
                >
                    MY COMPANY
                </p>
            </div>

        </div>
    )
}

export default WelcomePage