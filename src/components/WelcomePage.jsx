import React from 'react'
import { CgLogIn } from 'react-icons/cg'

import logo from "../assets/img/logo.jpg";
import cartShop from "../assets/img/cartShop.png";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import image4 from "../assets/img/image4.jpg";
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
                        className='text-xl font-bold bg-clip-text bg-gradient-to-l from-green-900 via-light-teal-900 to-cyan-700 text-transparent'
                    >
                        MY COMPANY
                    </p>
                </div>


                <div className='flex justify-end'>
                    <Button
                        icon={<CgLogIn className='text-2xl text-sky-500 mr-2' />}
                        label='Connectez-vous'
                        style='text-light-green-900 font-semibold hover:border p-4'
                        onClick={handleChangeStart}
                    />
                </div>
            </div>
            <div className='flex justify-between items-center min-h-[500px]'>
                <div className='h-full w-full md:w-1/2 md:basis-1/2'>
                    <p className='text-5xl font-bold  mb-8 text-titleColor'>
                        Vendez vos produits en toute sécurité
                    </p>
                    <p className='text-lg text-teal-800'>
                        Retrouvez tous vos module: La gestion  de stock,<br /> la gestion des finances.
                        Paramétrez <br />l'application selon votre goût et suivant <br /> vos préférences.
                    </p>
                </div>
                <div className='h-full w-full md:w-1/2 md:basis-1/2 grid grid-cols-2 gap-5 bg-gray-200 rounded-tl-full rounded-br-full'>
                    {/* <img src={cartShop} alt="Cart" className='' /> */}
                    <div className='flex justify-center items-center'>
                        <img src={image1} alt="Cart" className='w-40' />
                    </div>
                    <img src={image2} alt="Cart" className='' />
                    <img src={image3} alt="Cart" className='' />
                    <div className='flex justify-center items-center'>
                        <img src={image4} alt="Cart" className='w-40' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WelcomePage