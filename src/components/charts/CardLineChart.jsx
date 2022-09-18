import React from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

import { cardLineChartData } from "../../data/chartsData";

const CardLineChart = ({ chartColor }) => {
    return (
        <div className='w-20 h-14'>
            <ResponsiveContainer>
                <LineChart
                    data={cardLineChartData}
                    height={200}
                    width={250}
                >
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="ca"
                        stroke={chartColor}
                        strokeWidth={1}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default CardLineChart