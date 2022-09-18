import React from 'react'

const DescriptionDaily = ({ title, amount, lastOperation, hour, icon }) => {
    return (
        <div className='flex justify-between items-center ml-3'>
            <div className='flex justify-between items-center gap-2'>
                <div className='rounded-full border p-2 text-2xl'>
                    {icon}
                </div>
                <div>
                    <p className='font-bold'>{title}</p>
                    <p className='text-blue-gray-500 text-base'>${amount}</p>
                </div>
            </div>
            <div className='text-end'>
                <p className='font-bold'>${lastOperation}</p>
                <p className='text-blue-gray-500 text-xs'>{hour}</p>
            </div>
        </div>
    )
}

export default DescriptionDaily