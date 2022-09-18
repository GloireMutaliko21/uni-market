import React from 'react'
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import { useStateContext } from "../context/ContextProvider";
import gloire from "../assets/img/Gloire.jpg"
import Alerte from './Alerte';
import Logout from './Logout';
import Notifications from './Notifications';
const Navbar = () => {
    const { showAlert, setShowAlert, typeAlert, setTypeAlert } = useStateContext();
    const handleAlert = (type) => {
        setTypeAlert(type);
        setShowAlert(true);
    }

    return (
        <div className='bg-white flex justify-between items-center fixed left-0 right-0 top-0 px-5 shadow-md z-50'>
            <div>
                <button className='text-teal-900'>
                    <AiOutlineMenuUnfold />
                </button>

            </div>
            <div className='text-green-900 flex justify-around'>
                <button
                    className='mr-5 relative'
                    onClick={() => handleAlert('notif')}
                >
                    <MdNotifications className='text-xl' />
                    <div className='h-2 w-2 bg-yellow-800 rounded-full absolute right-0 top-2 bg'></div>
                </button>
                <Alerte
                    openState={showAlert}
                >
                    {
                        typeAlert === 'notif' ?
                            <Notifications /> :
                            typeAlert === 'profile' && <Logout />
                    }
                </Alerte>
                <button
                    className='flex justify-between items-center'
                    onClick={() => handleAlert('profile')}
                >
                    <img src={gloire} alt="" className='h-10 w-10 rounded-full' />
                    <span className='text-teal-900 ml-3'>Gloire Mutaliko</span>
                    <MdOutlineKeyboardArrowDown />
                </button>
            </div>
        </div>
    )
}

export default Navbar