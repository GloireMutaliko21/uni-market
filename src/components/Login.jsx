import React, { useMemo, useState, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";

import { useStateContext } from "../context/ContextProvider";
import Button from './Button'
import Input from './Input';
import Dialogue from './Dialogue';

const Login = () => {
    const {
        showDialog,
        setShowDialog,
        loginStatus,
        setLoginStatus,
        userData,
        setUserData,
    } = useStateContext();

    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();

    useEffect(() => {
        localStorage.getItem('isLogged')
            ? console.log("Already connected")
            : console.log("Not connected")
    }, [loginStatus])


    const handleChange = useMemo(() =>
        (e) => {
            if (e.target.name === "userName") {
                setUserName(e.target.value);
            }
            if (e.target.name === "password") {
                setPassWord(e.target.value);
            }
        }, [userName, passWord]);

    async function handleLogin() {
        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `username=${userName}&password=${passWord}`
        }
        try {
            if (!localStorage.getItem('isLogged')) {
                console.log('Non connecte');
                const response = await fetch('http://78.138.45.224:3002/api/v1/user/auth', params);
                const responseData = await response.json()
                if (response.status === 200) {
                    localStorage.setItem('isLogged', true);
                    setUserData(responseData);
                    setLoginStatus(true);
                }
            }
        } catch (error) {
            console.log(error.message);
        }

    }

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
                    onChange={handleChange}
                    name="userName"
                />
                <Input
                    label='Mot de passe'
                    type='password'
                    onChange={handleChange}
                    name="password"
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
                        onClick={() => { setShowDialog(true) }}
                    >
                        Mot de passe oublié ?
                    </span>
                    {showDialog &&
                        <Dialogue
                            label='Envoyer'
                            handleConfirm={() => { }}
                            title='Réinitialiser mot de passe'
                        >
                            <div className='text-blue-gray-900 px-4'>
                                <Input
                                    label='E-mail '
                                    type='email'
                                    value=''
                                    onChange={() => { }}
                                />
                            </div>
                        </Dialogue>}
                </div>
            </div>
            <div className='mt-8'>
                <Button
                    label='Se connecter'
                    style='flex justify-center w-full bg-blue-gray-800 hover:bg-blue-gray-700 text-white font-semibold p-3'
                    onClick={handleLogin}
                />
            </div>

        </div>
    )
}

export default Login