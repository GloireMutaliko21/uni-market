import React from 'react'

const Input = ({ label, value, onChange, type }) => {
    return (
        <div>
            <label className='font-bold text-sm'>{label}</label>
            <input
                className="w-full bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none mt-2 mb-4"
                type={type}
                value={value}
                onChange={onChange}
            >
            </input>
        </div>
    )
}

export default Input