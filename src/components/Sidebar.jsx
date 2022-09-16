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
        <div className='bock fixed left-0 top-5 mx-5 text-red-800'>
            {mainMenus.map((menu, index) =>
                <Accordion
                    open={open === index + 1}
                    key={index}
                    icon={<MdOutlineKeyboardArrowDown className={`${open === index + 1 ? "rotate-180" : ""}`} />}
                    animate={customAnimation}
                >
                    <AccordionHeader onClick={() => handleOpen(index + 1)} className='text-xs text-teal-900 uppercase'>
                        {menu}
                    </AccordionHeader>
                    <AccordionBody className='grid'>
                        {routesData.map((route, idx) =>
                            route.parent === menu &&
                            <NavLink to={route.path} key={idx} className='flex items-center'><span className='mr-3'>{route.icon}</span><span>{route.title}</span></NavLink>
                        )}
                    </AccordionBody>
                </Accordion>
            )}
        </div>
    )
}

export default Sidebar