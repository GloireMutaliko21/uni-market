import React, { useState } from 'react'
import { MdArrowRight } from 'react-icons/md'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Label, Tooltip } from 'recharts'

const data = [
    { name: "Ch d'Af", value: 400 },
    { name: 'Benefice', value: 300 },
    { name: 'Revenus', value: 300 },
    { name: 'Depenses', value: 200 },
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
                    Tout
                    <MdArrowRight className='ml-2' />
                </button>
            </div>
            <div className='bg-gray-50 mt-10 flex justify-between rounded-xl p-5'>
                <div className='text-xs -mt-14 -mb-14'>
                    <PieChart width={180} height={320}>
                        <Tooltip />
                        <Pie
                            data={data}
                            innerRadius={30}
                            outerRadius={50}
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