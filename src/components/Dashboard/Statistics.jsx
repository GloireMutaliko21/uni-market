import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Label } from 'recharts'

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#324478', '#396A60', '#f48b73', '#956efa'];
const Statistics = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = (_, index) => {
        setActiveIndex(index)
    }

    return (
        <div className='border p-4 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h2 className='text-blue-gray-900 text-lg font-semibold'>Statistiques</h2>
                <button
                    className='bg-blue-gray-50 rounded-lg flex items-center p-2'
                >
                    Voir tout
                    <MdArrowRight className='ml-6' />
                </button>
            </div>
            <div className='bg-gray-50 mt-10 flex justify-between'>
                <div className='-mt-24 text-xs'>
                    <PieChart width={250} height={320} onMouseEnter={onPieEnter}>
                        <Legend />
                        <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label

                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>

            </div>
        </div>
    )
}

export default Statistics