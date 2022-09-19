import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

import { dailySituationData } from "../../data/dailySituation";
import Tchange from "../../assets/img/Tchange.jpg";
import DescriptionDaily from './DescriptionDaily';

const DailySituation = () => {
    return (
        <div className='p-5 border rounded-2xl'>
            <div className='flex justify-between gap-36'>
                <h2 className='font-bold text-blue-gray-900'>Situation journalière</h2>
                <button>
                    <AiOutlineEllipsis />
                </button>
            </div>
            <div className='bg-no-repeat bg-cover bg-center bg-fixed rounded-xl text-white px-6 py-2 h-36 mt-5 mb-8 flex flex-col justify-between shadow-2xl shadow-blue-700'
                style={{ backgroundImage: `url(${Tchange})` }}>
                <div className='flex justify-end font-bold'>
                    <span>Taux du jour</span>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-blue-gray-900 font-semibold'>1 dollar s'échange à</p>
                    <p className='font-black text-2xl'>2040<span className='text-sm'>fc</span></p>
                </div>
            </div>
            <div className='w-full border-b border-blue-gray-200'></div>
            <div className='mt-5'>
                <h2 className='font-semibold text-blue-gray-900 mb-6'>Activités</h2>
                {dailySituationData.map(({ title, amount, lastOperation, hour, icon }) =>
                    <DescriptionDaily
                        key={title}
                        title={title}
                        amount={amount}
                        lastOperation={lastOperation}
                        hour={hour}
                        icon={icon}
                    />
                )}
            </div>
            <div className=' flex justify-end my-5'>
                <CalendarComponent id='calendar' />
            </div>
        </div>
    )
}

export default DailySituation