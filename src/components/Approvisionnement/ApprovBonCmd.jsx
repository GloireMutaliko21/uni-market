import React from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';

const ApprovBonCmd = ({ open, handleOpen, children }) => {
    return (
        <div>
            <Dialog
                open={open}
                size="xxl"
                handler={handleOpen}
            >
                <DialogHeader>Approvisionner Bon de Commande</DialogHeader>
                <DialogBody divider>
                    {children}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={() => handleOpen(null)}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={() => handleOpen(null)}
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    )
}

export default ApprovBonCmd