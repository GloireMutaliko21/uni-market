import React from 'react'

import Button from './Button';
import { useStateContext } from "../context/ContextProvider";
import gloire from "../assets/img/Gloire.jpg";
import AlertHeader from './AlertHeader';

const Logout = () => {
    const { setUserData, setLoginStatus, boolingState, setBoolingState } = useStateContext();
    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        setUserData({});
        setLoginStatus(false);
        setBoolingState({ ...boolingState, showPassword: false })
    }

    return (
        <div>
            <AlertHeader
                title='Mon profil'
                info={
                    <button>Edit</button>
                }
            />
            <div className='flex items-center border-b mb-3 pb-3 border-gray-400'>
                <img src={gloire} alt="profile image" className='rounded-full h-24 w-24' />
                <div className='ml-3'>
                    <p className='text-blue-gray-900 text-lg font-semibold'>Gloire Mutaliko</p>
                    <p className='text-blue-gray-50'>Vendeur</p>
                    <p className='text-gray-900 font-extralight'>gloire@gmail.com</p>
                </div>
            </div>
            <Button
                label='Deconnexion'
                style='bg-teal-900 hover:bg-teal-800 text-white font-semibold p-3'
                onClick={handleLogout}
            />
        </div>
    )
}

export default Logout