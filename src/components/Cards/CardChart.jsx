import React from 'react'

import CardLineChart from '../charts/CardLineChart'

const CardChart = ({ title, amount, icon, chartColor }) => {
    return (
        <div className='px-5 py-2 border rounded-2xl max-w-max'>
            <div className=' flex gap-5 items-center'>
                <div className='p-2 border rounded-xl text-xl text-green-800 bg-gray-50'>{icon}</div>
                <CardLineChart chartColor={chartColor} />
            </div>
            <div className='mt-5'>
                <p className='font-bold text-blue-gray-400'>{title}</p>
                <p className='text-2xl font-bold'>${amount}</p>
            </div>
        </div>
    )
}

export default CardChart