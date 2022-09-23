import React from 'react'
import FormAdd from '../components/Approvisionnement/FormAdd';
import ParamsBonCommande from '../components/Approvisionnement/ParamsBonCommande';

const Approv = () => {
    return (
        <div>
            <div className='flex'>
                <FormAdd />
                <ParamsBonCommande />
            </div>
        </div>
    )
}

export default Approv