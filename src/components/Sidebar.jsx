import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import { mainMenus, routesData } from "../routes/Routes";

const Sidebar = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    return (
        <div className='bock fixed left-0 top-5 p-5 shadow-md'>
            {mainMenus.map((menu, index) =>
                <Accordion
                    open={open === index + 1}
                    key={index}
                    icon={<MdOutlineKeyboardArrowDown className={`${open === index + 1 ? "rotate-180" : ""}`} />}
                    animate={customAnimation}
                    className=''
                >
                    <AccordionHeader onClick={() => handleOpen(index + 1)} className='text-xs text-teal-800 uppercase'>
                        {menu}
                    </AccordionHeader>
                    <AccordionBody className='grid bg-white p-5 min-h-max shadow-md shadow-gray-400'>
                        {routesData.map((route, idx) =>
                            route.parent === menu &&
                            <NavLink
                                to={route.path}
                                key={idx}
                                className='flex items-center m-1 py-1 pr-3 text-teal-900 hover:bg-teal-900 hover:text-white rounded-md'
                            >
                                <span className='mr-3 text-teal-700 bg-white p-2 rounded-lg shadow-lg shadow-teal-50'>
                                    {route.icon}
                                </span>
                                <span className=''>
                                    {route.title}
                                </span>
                            </NavLink>
                        )}
                    </AccordionBody>
                </Accordion>
            )}
        </div>
    )
}

export default Sidebar