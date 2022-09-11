import React from 'react'
import { FcGoogle } from "react-icons/fc";

import Button from './Button'
import Input from './Input';

const Login = () => {
    return (
        <div className='flex flex-col justify-center max-w-max shadow-xl shadow-gray-200 p-10 text-blue-gray-600 rounded-md'>
            <div className='flex flex-col items-center  mb-5'>
                <h1 className='text-2xl font-bold'>Uni-Market</h1>
                <p className='mb-5'>Bienvenue</p>
                <Button
                    icon={<FcGoogle className='text-xl mr-2' />}
                    label='Se connecter avec google'
                    style='text-blue-gray-800 hover:bg-slate-50 text-sm font-medium shadow-md border p-2'
                />
            </div>
            <div className='flex justify-between items-center w-full mb-5'>
                <div className='border-t w-1/5'></div>
                <span className='text-xs'>OU SE CONNECTER AVEC</span>
                <div className='border-t w-1/5'></div>
            </div>
            <div>
                <Input
                    label='E-mail ou Username'
                    type='email'
                    value=''
                    onChange={() => { }}
                />
                <Input
                    label='Mot de passe'
                    type='password'
                    value=''
                    onChange={() => { }}
                />
            </div>
            <div className='flex justify-between items-center text-xs'>
                <div className='flex justify-around items-center'>
                    <input name='remember' id='remember' type="checkbox" />
                    <label htmlFor='remember' className='ml-3 cursor-pointer'>Se souvenir de moi</label>
                </div>
                <div>
                    <span
                        className='text-blue-800 hover:underline hover:cursor-pointer'
                        onClick={() => console.log("OK")}
                    >
                        Mot de passe oublié ?
                    </span>
                </div>
            </div>
            <div className='mt-8'>
                <Button
                    label='Se connecter'
                    style='flex justify-center w-full bg-blue-gray-800 hover:bg-blue-gray-700 text-white font-semibold p-3'
                />
            </div>
        </div>
    )
}

export default Login