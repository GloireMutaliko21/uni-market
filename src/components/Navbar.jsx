import React from 'react'
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useStateContext } from "../context/ContextProvider";
import gloire from "../assets/img/Gloire.jpg"
import Alerte from './Alerte';
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
                <Alerte>Bonjour</Alerte>
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