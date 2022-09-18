import React from 'react'

import { cardsCharts } from "../../data/cards";
import CardChart from '../Cards/CardChart';
const CardsCharts = () => {
    return (
        <div className='flex flex-wrap gap-10'>
            {
                cardsCharts.map(
                    ({ amount, chartColor, icon, title }) =>
                        <CardChart
                            key={title}
                            chartColor={chartColor}
                            icon={icon}
                            title={title}
                            amount={amount}
                        />
                )
            }
        </div>
    )
}

export default CardsCharts