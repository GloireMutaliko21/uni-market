import React from 'react'


import { notificationData } from "../data/notificationData";
import Button from './Button';
import AlertHeader from './AlertHeader';

const Notifications = () => {
    return (
        <div>
            <>
                <AlertHeader
                    title='Notifications'
                    info='5 New'
                />
                {
                    notificationData.map(
                        (notification, idx) =>
                            <div
                                key={idx}
                                className='text-gray-300 m-4 border-b border-gray-500 pb-2'
                            >
                                <p className='font-bold text-gray-900'>{notification.expediteur}</p>
                                <p className='text-base'>{notification.content}</p>
                            </div>
                    )
                }
                <Button
                    label={`Voir toutes (${10})`}
                    style='flex justify-center w-full bg-teal-900 hover:bg-teal-800 text-white font-semibold p-3'
                    onClick={() => { }}
                />
            </>
        </div>
    )
}

export default Notifications