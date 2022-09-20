import React from 'react'

import { useStateContext } from "../context/ContextProvider";

const Input = ({ label, value, onChange, type, name, icon, iconMask, reference }) => {
    const { showPassword, setShowPassword } = useStateContext();

    const handleChangeIcon = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            <label className='font-bold text-sm'>{label}</label>
            <div className='bg-gray-200 flex justify-between items-center relative mt-2 mb-4'>
                <input
                    ref={reference}
                    className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none"
                    type={type}
                    value={value}
                    onChange={onChange}
                    name={name}
                >
                </input>
                <span
                    className='absolute right-3 hover:cursor-pointer text-lg text-teal-900'
                    onClick={handleChangeIcon}
                >
                    {!showPassword ? icon : iconMask}
                </span>
            </div>
        </div>
    )
}

export default Input