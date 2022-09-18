import React from 'react'

const DescriptionDaily = ({ title, amount, lastOperation, hour, icon }) => {
    return (
        <div className='flex justify-between items-center ml-3 mt-4 border-b'>
            <div className='flex justify-between items-center gap-2'>
                <div className='rounded-xl border border-blue-gray-300 p-1 text-xl text-cyan-600'>
                    {icon}
                </div>
                <div>
                    <p className='font-semibold text-sm text-blue-gray-500'>{title}</p>
                    <p className='text-blue-gray-500 text-sm'>${amount}</p>
                </div>
            </div>
            <div className='text-end'>
                <p className='font-bold text-xs'>${lastOperation}</p>
                <p className='text-blue-gray-500 text-xs'>{hour}</p>
            </div>
        </div>
    )
}

export default DescriptionDaily