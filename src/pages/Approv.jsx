import React from 'react'
import FormAdd from '../components/Approvisionnement/FormAdd';
import Produits from '../components/Approvisionnement/Produits';

const Approv = () => {
    return (
        <div className='px-2'>
            <h2 className='text-3xl font-black mx-10'>Approvisionnement</h2>
            <div className='w-full grid md:grid-cols-[3fr_1fr] gap-3'>
                <FormAdd />
                <Produits />
            </div>
        </div>
    )
}

export default Approv