import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";

import Tchange from "../../assets/img/Tchange.jpg";

const DailySituation = () => {
    return (
        <div className='p-5 border rounded-2xl'>
            <div className='flex justify-between gap-36'>
                <h2 className='font-bold text-blue-gray-900'>Situation journalière</h2>
                <button>
                    <AiOutlineEllipsis />
                </button>
            </div>
            <div className='bg-no-repeat bg-cover bg-center bg-fixed rounded-xl text-white px-6 py-2 h-36 mt-5'
                style={{ backgroundImage: `url(${Tchange})` }}>
                <div className='flex justify-end font-bold'>
                    <span>Taux du jour</span>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DailySituation