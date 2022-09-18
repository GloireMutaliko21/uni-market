import React from 'react'
import { AreaChart, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer, Legend } from "recharts";

const MainChart = () => {
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
        <div className='w-full h-64 border my-5 p-5 rounded-2xl text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
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
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3a466a" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#3a466a" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#3a466a" fillOpacity={1} fill="url(#colorPv)" />
                    <Line type="monotone" dataKey="uv" stroke="#6CBAB1" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}

export default MainChart