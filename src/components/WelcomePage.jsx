import React from 'react'
import { CgLogIn } from 'react-icons/cg'

import logo from "../assets/img/logo.jpg";
import cartShop from "../assets/img/cartShop.png";
import "../styles/welcome.css";
import Button from './Button';
import { useStateContext } from "../context/ContextProvider";

const WelcomePage = () => {
    const { handleChangeStart } = useStateContext();

    return (
        <div>
            <div className='flex flex-wrap md:flex-nowrap items-center justify-between -mt-10'>
                <div className='flex items-center'>
                    <img src={logo} alt='Logo' className='h-16 w-16' />
                    <p
                        className='text-xl font-bold bg-clip-text bg-gradient-to-l from-yellow-400 via-red-500 to-light-blue-700 text-transparent'
                    >
                        MY COMPANY
                    </p>
                </div>


                <div className='flex justify-end'>
                    <Button
                        icon={<CgLogIn className='text-2xl text-sky-500 mr-2' />}
                        label='Connectez-vous'
                        style='text-light-blue-900 font-semibold hover:border p-4'
                        onClick={handleChangeStart}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center min-h-[500px]'>
                <div className='h-full w-full md:w-1/2 md:basis-1/2'>
                    <p className='text-5xl font-bold  mb-8 text-light-blue-900'>
                        Vendez vos produits en toute sécurité
                    </p>
                    <p className='text-lg text-gray-600'>
                        Retrouvez tous vos module: La gestion  de stock,<br /> la gestion des finances.
                        Paramétrez <br />l'application selon votre goût et suivant <br /> vos préférences.
                    </p>
                </div>
                <div className='h-full w-full md:w-1/2 md:basis-1/2'>
                    <img src={cartShop} alt="Cart" className='-scale-x-100' />
                </div>
            </div>
        </div>
    )
}

export default WelcomePage