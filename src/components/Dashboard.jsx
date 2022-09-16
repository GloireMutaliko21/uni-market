import React from 'react'
import { BrowserRouter } from "react-router-dom";

import Button from './Button';
import { useStateContext } from "../context/ContextProvider";
import Sidebar from './Sidebar';

const Dashboard = () => {
    const { setUserData, setLoginStatus, setShowPassword } = useStateContext();
    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        setUserData({});
        setLoginStatus(false);
        setShowPassword(false)
    }

    return (
        <div className='text-2xl font-bold text-center'>
            Dashboard
            <Button
                label='Deconnexion'
                style='flex justify-center w-full bg-blue-gray-800 hover:bg-blue-gray-700 text-white font-semibold p-3'
                onClick={handleLogout}
            />
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>

        </div>
    )
}

export default Dashboard