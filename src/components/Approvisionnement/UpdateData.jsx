import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { BsCheckCircleFill } from "react-icons/bs";

import Button from '../Button'

const UpdateData = ({ onClose }) => {
    const Input = ({ type, onChange, value, placehoder }) => {
        return (
            <input
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placehoder}
                className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-1 px-2 mr-2 block appearance-none"
            >
            </input>
        )
    }

    return (
        <div className='flex justify-between items-center'>
            <Input
                placehoder='Quantité'
                type='number'
            />
            <Input
                placehoder='Prix Unitaire'
                type='number'
            />
            <Input
                placehoder='N° du lot'
                type='text'
            />
            <Input
                placehoder='Date Exp.'
                type='date'
            />
            <div className='flex justify-around w-96'>
                <Button
                    label='Valider'
                    style='text-green-800 hover:underline'
                />
                <Button
                    icon={<TiDeleteOutline className='text-2xl text-red-700' />}
                    onClick={onClose}
                />
            </div>
        </div>
    )
}

export default UpdateData