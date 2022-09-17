import React from 'react'
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import { notificationData } from "../data/notificationData";
import gloire from "../assets/img/Gloire.jpg"
import Alerte from './Alerte';
import Button from './Button';
const Navbar = () => {
    const { showAlert, setShowAlert } = useStateContext();

    return (
        <>
            <div className='fixed right-0 top-0 mx-5 my-2 text-green-900 flex justify-around'>
                <button
                    className='mr-5 relative'
                    onClick={() => setShowAlert(true)}
                >
                    <MdNotifications className='text-xl' />
                    <div className='h-2 w-2 bg-yellow-800 rounded-full absolute right-0 top-2'></div>
                </button>
                <Alerte>
                    <div className='flex items-center mb-5 border-b'>
                        <h2 className='text-xl font-semibold'>Notifications</h2>
                        <span className='bg-yellow-800 text-teal-900 text-sm m-5 px-2 py-1 rounded-xl'>5 New</span>
                    </div>

                    {notificationData.map((notification, idx) =>
                        <div
                            key={idx}
                            className='text-gray-300 m-4 border-b border-gray-500 pb-2'
                        >
                            <p className='font-bold text-gray-900'>{notification.expediteur}</p>
                            <p className='text-base'>{notification.content}</p>
                        </div>
                    )}
                    <Button
                        label={`Voir toutes (${10})`}
                        style='flex justify-center w-full bg-teal-900 hover:bg-teal-800 text-white font-semibold p-3'
                        onClick={() => { }}
                    />
                </Alerte>
                <button className='flex justify-between items-center'>
                    <img src={gloire} alt="" className='h-10 w-10 rounded-full' />
                    <span className='text-teal-900 ml-3'>Gloire Mutaliko</span>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>

        </>
    )
}

export default Navbar