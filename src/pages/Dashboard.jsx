import React from 'react'
import CardsCharts from '../components/Dashboard/CardsCharts';
import DailySituation from '../components/Dashboard/DailySituation';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex justify-evenly items-start gap-10'>
                <div>
                    <CardsCharts />
                    {/* <DailySituation /> */}
                </div>
                <DailySituation />
            </div>

        </div>
    )
}

export default Dashboard