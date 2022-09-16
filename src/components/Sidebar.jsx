import React from 'react'
import { NavLink } from "react-router-dom";

import { mainMenus, routesData } from "../routes/Routes";

const Sidebar = () => {
    return (
        <div className='bock'>
            {mainMenus.map((menu, index) =>
                <div key={index}>
                    <p className='uppercase'>{menu}</p>
                    <div className='grid ml-5'>
                        {routesData.map((route, idx) =>
                            route.parent === menu &&
                            <NavLink to={route.path} key={idx}>{route.title}</NavLink>

                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sidebar