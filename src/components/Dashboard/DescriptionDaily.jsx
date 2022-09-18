import React from 'react'

const DescriptionDaily = ({ title, amount, lastEntry, hour }) => {
    return (
        <div className='flex justify-between items-center ml-3'>
            <div className='flex justify-between items-center gap-2'>
                <div className='rounded-full border p-2 text-2xl'>
                    <FcCurrencyExchange />
                </div>
                <div>
                    <p className='font-bold'>Recettes vente</p>
                    <p className='text-blue-gray-500 text-base'>$452</p>
                </div>
            </div>
            <div className='text-end'>
                <p className='font-bold'>$56</p>
                <p className='text-blue-gray-500 text-xs'>14:23 PM</p>
            </div>
        </div>
    )
}

export default DescriptionDaily