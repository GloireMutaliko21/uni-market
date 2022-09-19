import React, { useMemo, useState, useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import { useStateContext } from "../context/ContextProvider";
import Button from './Button'
import Input from './Input';
import Dialogue from './Dialogue';
import { endPoint } from "../constants/api";

const Login = () => {
    const {
        showDialog,
        setShowDialog,
        loginStatus,
        setLoginStatus,
        rememberMe,
        setUserData,
        showPassword,
        token, setToken,
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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: passWord
            })
        }
        try {
            if (!localStorage.getItem('isLogged')) {
                const response = await fetch(`${endPoint}/user/auth`, params);
                const responseData = await response.json();
                if (response.status === 200) {
                    localStorage.setItem('token', responseData.token)
                    if (rememberMe.current.checked) {
                        localStorage.setItem('isLogged', true);
                    }
                    setUserData(responseData);
                    setToken(responseData.token);
                    console.log(responseData.token);
                    setLoginStatus(true);
                }
            }
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className='flex flex-col justify-center max-w-max shadow-xl shadow-gray-200 p-10 text-teal-800 rounded-md'>
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
                    type={showPassword ? 'text' : 'password'}
                    onChange={handleChange}
                    name="password"
                    icon={<BsEyeFill />}
                    iconMask={<BsFillEyeSlashFill />}
                />
            </div>
            <div className='flex justify-between items-center text-xs'>
                <div className='flex justify-around items-center'>
                    <input ref={rememberMe} name='remember' id='remember' type="checkbox" />
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
                    style='flex justify-center w-full bg-teal-800 hover:bg-teal-700 text-white font-semibold p-3'
                    onClick={handleLogin}
                />
            </div>

        </div>
    )
}

export default Login