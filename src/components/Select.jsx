import React from 'react'

const Select = ({ reference, value, onChange, data, label }) => {

    return (
        <select
            ref={reference}
            value={`${value}`}
            onChange={onChange}
            className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block"
        >
            <option value="">Selectionner {label}</option>
            {data.map((option) =>
                <option
                    key={option.code}
                    value={`${option.code}`}
                    className='capitalize'
                >
                    {option.designation}
                </option>
            )}
        </select>
    )
}

export default Select