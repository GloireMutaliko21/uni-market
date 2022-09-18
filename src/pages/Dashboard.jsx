import React from 'react'
import CardsCharts from '../components/Dashboard/CardsCharts';
import DailySituation from '../components/Dashboard/DailySituation';
import MainChart from '../components/Dashboard/MainChart';

const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex justify-evenly items-start gap-10'>
                <div>
                    <CardsCharts />
                    <MainChart />
                </div>
                <DailySituation />
            </div>

        </div>
    )
}

export default Dashboard