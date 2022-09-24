import React from 'react'
import FormAdd from '../components/Approvisionnement/FormAdd';
import ParamsBonCommande from '../components/Approvisionnement/ParamsBonCommande';
import Produits from '../components/Approvisionnement/Produits';

const Approv = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16'>
                <FormAdd />
                <ParamsBonCommande />
                <Produits />
            </div>
        </div>
    )
}

export default Approv