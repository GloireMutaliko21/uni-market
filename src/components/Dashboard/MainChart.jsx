import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, Legend } from "recharts";

const MainChart = () => {
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Fev',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Avr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Mai',
            uv: 1890,
            pv: 4800,
            amt: 2181,
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
        <div className='w-full h-64 border my-5 p-5 rounded-2xl text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#f1f1f6" fill="#f1f1f6" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#f1f1f6" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MainChart