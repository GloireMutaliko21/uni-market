import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React, { useRef, useState } from 'react'

import Input from '../Input'
import Select from '../Select';

const ParamsBonCommande = () => {
    const [openParamsBon, setOpenParamsBon] = useState(false);

    const handleOpen = () => {
        setOpenParamsBon(prev => !prev);
    }

    const numBonRef = useRef();
    const fournisseurRef = useRef();
    const nombreOpRef = useRef();

    return (
        <div>
            <Accordion
                open={openParamsBon}
                animate={{
                    mount: { scale: 1 },
                    unmount: { scale: 0.8 }
                }}
            >
                <AccordionHeader onClick={handleOpen}>
                    Approvisionner par bon de commande
                </AccordionHeader>
                <AccordionBody>
                    <div className='mb-3'>

                        <Select
                            reference={fournisseurRef}
                            label='Fournisseur'
                            value=''
                            onChange={() => { }}
                            data={[]}
                        />
                    </div>
                    <div className='flex'>
                        <Input
                            reference={numBonRef}
                            label='Numéro bon de commande'
                            type='number'
                            name=''
                            value=''
                            onChange={() => { }}
                        />
                        <Input
                            reference={nombreOpRef}
                            label='Opérations'
                            type='number'
                            name=''
                            value=''
                            onChange={() => { }}
                        />
                    </div>
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default ParamsBonCommande