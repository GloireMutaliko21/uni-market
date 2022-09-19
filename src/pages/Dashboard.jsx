import React from 'react'
import CardsCharts from '../components/Dashboard/CardsCharts';
import DailySituation from '../components/Dashboard/DailySituation';
import MainChart from '../components/Dashboard/MainChart';

const Dashboard = () => {
    return (
        <div className='grid xl:flex flex-wrap xl:gap-10'>
            <div className=''>
                <CardsCharts />
                <MainChart />
            </div>
            <DailySituation />
        </div>
    )
}

export default Dashboard