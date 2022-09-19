import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { Area, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const Saving = () => {
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 1500,
            amt: 2400,
        },
        {
            name: 'Fev',
            uv: 1500,
            pv: 4398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2500,
            pv: 1000,
            amt: 2290,
        },
        {
            name: 'Avr',
            uv: 1700,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Mai',
            uv: 4890,
            pv: 1800,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jui',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className='border p-4 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h2 className='text-blue-gray-900 text-lg font-semibold'>Investissement</h2>
                <button
                    className='bg-blue-gray-50 rounded-lg flex items-center p-2'
                >
                    Tout
                    <MdArrowRight className='ml-2' />
                </button>
            </div>
            <ComposedChart
                width={250}
                height={320}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#235549" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#235549" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeOpacity={0.2} />
                <Legend />
                {/* <XAxis /> */}
                <Tooltip />
                {/* <Area type="monotone" dataKey="pv" stackId="1" stroke="#235549" fillOpacity={1} fill="url(#colorPv)" /> */}
                <Line type="monotone" dataKey="uv" stroke="#6CBAB1" />
            </ComposedChart>
        </div>
    )
}

export default Saving