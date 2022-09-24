import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React, { useRef, useState } from 'react'
import Button from '../Button';

import Input from '../Input'
import Select from '../Select';
import ApprovBonCmd from './ApprovBonCmd';

const ParamsBonCommande = () => {
    const [openParamsBon, setOpenParamsBon] = useState(false);
    const [formApprovBon, setFormApprovBon] = useState(false)

    const handleOpen = () => {
        setOpenParamsBon(prev => !prev);
    }

    const numBonRef = useRef();
    const fournisseurRef = useRef();
    const nombreOpRef = useRef();

    return (
        <div>
            {/* <Accordion
                open={openParamsBon}
                animate={{
                    mount: { scale: 1 },
                    unmount: { scale: 0.8 }
                }}
            >
                <AccordionHeader onClick={handleOpen} className='text-sm'>
                    Approvisionner par bon de commande
                </AccordionHeader>
                <AccordionBody className='min-h-max'>
                    <div className='p-2 shadow-lg border'>
                        <div className='mb-3 shadow-md'>
                            <Select
                                reference={fournisseurRef}
                                label='Fournisseur'
                                value=''
                                onChange={() => { }}
                                data={[]}
                            />
                        </div>
                        <div className=''>
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
                            <div className='flex justify-end'>
                                <Button
                                    label='Continuer'
                                    style='bg-teal-900 hover:bg-teal-800 text-white font-semibold p-2'
                                    onClick={() => setFormApprovBon(true)}
                                />
                            </div>
                            {
                                formApprovBon && <ApprovBonCmd
                                    open={formApprovBon}
                                    handleOpen={() => setFormApprovBon(false)}
                                />
                            }
                        </div>
                    </div>
                </AccordionBody>
            </Accordion> */}
        </div>
    )
}

export default ParamsBonCommande