import React from 'react'
import CardsCharts from '../components/Dashboard/CardsCharts';
import DailySituation from '../components/Dashboard/DailySituation';
import MainChart from '../components/Dashboard/MainChart';
import Statistics from '../components/Dashboard/Statistics';
import Saving from '../components/Dashboard/Saving';

const Dashboard = () => {
    return (
        <div className='grid xl:flex flex-wrap xl:gap-10 mb-8'>
            <div className=''>
                <CardsCharts />
                <MainChart />
                <div className='w-full grid md:grid-cols-2 gap-5 justify-around'>
                    <Statistics />
                    <Saving />
                </div>
            </div>
            <DailySituation />
        </div>
    )
}

export default Dashboard