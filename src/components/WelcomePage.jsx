import React from 'react'
import { CgLogIn } from 'react-icons/cg'

import logo from "../assets/img/logo.jpg";
import cartShop from "../assets/img/cartShop.png";
import "../styles/welcome.css";
import Button from './Button';

const WelcomePage = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt='Logo' className='h-16 w-16' />
                    <p
                        className='text-xl font-bold bg-clip-text bg-gradient-to-l from-yellow-400 via-red-500 to-sky-400 text-transparent'
                    >
                        MY COMPANY
                    </p>
                </div>


                <div className='flex justify-end'>
                    <Button
                        icon={<CgLogIn className='text-2xl text-sky-500 mr-2' />}
                        label='Connectez-vous'
                        style='text-sky-800 font-semibold hover:border'
                    />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-5xl font-bold  mb-8 text-sky-800'>
                        Vendez vos produits en toute sécurité
                    </p>
                    <p className='text-lg text-gray-600'>
                        Retrouvez tous vos module: La gestion  de stock,<br /> la gestion des finances.
                        Paramétrez <br />l'application selon votre goût et suivant <br /> vos préférences.
                    </p>
                </div>
                <div >
                    <img src={cartShop} alt="Cart" className='-scale-x-100' />
                </div>
            </div>
        </div>
    )
}

export default WelcomePage