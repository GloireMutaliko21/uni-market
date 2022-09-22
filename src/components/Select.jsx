import React from 'react'

const Select = ({ reference, value, onChange, data }) => {

    return (
        <select
            ref={reference}
            value={`${value}`}
            onChange={onChange}
            className="w-full text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block"
        >
            <option value="">Selectionner Catégorie</option>
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