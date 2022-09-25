import React from 'react'
import Input from '../Input'

const UpdateData = () => {
    const Input = ({ type, onChange, value }) => {
        return (
            <input
                type={type}
                onChange={onChange}
                value={value}
                className='w-12'
            >
            </input>
        )
    }

    return (
        <div className='flex justify-between'>
            <Input />
            <Input />
            <Input />
        </div>
    )
}

export default UpdateData