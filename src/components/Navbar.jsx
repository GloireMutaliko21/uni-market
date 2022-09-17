import React from 'react'
import { MdNotifications, MdOutlineKeyboardArrowDown } from "react-icons/md";
import gloire from "../assets/img/Gloire.jpg"
const Navbar = () => {
    return (
        <div className='fixed right-0 top-0 mx-5 my-2 text-green-900 flex justify-around'>
            <button className='mr-5'>
                <MdNotifications className='text-xl' />
            </button>
            <button className='flex justify-between items-center'>
                <img src={gloire} alt="" className='h-10 w-10 rounded-full' />
                <span className='text-teal-900 ml-3'>Gloire Mutaliko</span>
                <MdOutlineKeyboardArrowDown />
            </button>

        </div>
    )
}

export default Navbar