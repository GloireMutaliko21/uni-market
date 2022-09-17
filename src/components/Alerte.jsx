import { Alert } from "@material-tailwind/react";

import { useStateContext } from "../context/ContextProvider";

const Alerte = ({ children }) => {
    const { showAlert, setShowAlert } = useStateContext();

    return (
        <div>
            <Alert
                show={showAlert}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
                dismissible={{
                    onClose: (prevState) => setShowAlert(!prevState),
                }}
                className='bg-teal-600 top-12 right-5 absolute w-max'
            >
                {children}
            </Alert>
        </div>
    );
}

export default Alerte;