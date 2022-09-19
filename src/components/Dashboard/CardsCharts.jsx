import React from 'react'

import { cardsCharts } from "../../data/cards";
import CardChart from '../Cards/CardChart';
const CardsCharts = () => {
    return (
        <div className='grid sm:grid-cols-2 gap-5 md:grid-cols-3 justify-around'>
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