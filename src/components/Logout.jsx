import React from 'react'

import Button from './Button';
import { useStateContext } from "../context/ContextProvider";
import Sidebar from './Sidebar';
import AlertHeader from './AlertHeader';

const Logout = () => {
    const { setUserData, setLoginStatus, setShowPassword } = useStateContext();
    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        setUserData({});
        setLoginStatus(false);
        setShowPassword(false)
    }

    return (
        <div>
            <AlertHeader
                title='Mon profil'
                info='Gloire Mutaliko'
            />
            <Button
                label='Deconnexion'
                style='flex justify-center w-full bg-blue-gray-800 hover:bg-blue-gray-700 text-white font-semibold p-3'
                onClick={handleLogout}
            />
        </div>
    )
}

export default Logout