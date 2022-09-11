import React from 'react'

const Button = ({ icon, label, style }) => {
    return (
        <button type='buttom' className={`${style} flex items-center justify-between rounded-md p-4`}>
            {icon}
            {label}
        </button>
    )
}

export default Button