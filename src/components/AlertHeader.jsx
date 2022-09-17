import React from 'react'

const AlertHeader = ({ title, info }) => {
    return (
        <div className='flex items-center mb-5 border-b'>
            <h2 className='text-xl font-semibold'>{title}</h2>
            <span className='bg-yellow-800 text-teal-900 text-sm m-5 px-2 py-1 rounded-xl'>{info}</span>
        </div>
    )
}

export default AlertHeader