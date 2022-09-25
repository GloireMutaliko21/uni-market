import { useEffect } from "react";
import { endPoint } from "../constants/api";
import { useStateContext } from "../context/ContextProvider";

export function getData(data, setData, url) {
    const { boolingState, setBoolingState, getData, setGetData } = useStateContext();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        (async function () {
            const dataParams = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            };
            try {
                const response = await fetch(`${endPoint}${url}`, dataParams, { signal });
                const responseData = await response.json();
                if (response.status === 200) {
                    console.log(responseData);
                    setData(responseData.data);
                    setGetData(false);
                } if (response.status === 403) {
                    setBoolingState({ ...boolingState, loginStatus: false });
                    localStorage.removeItem('isLogged');
                }
            } catch (error) {
                setBoolingState({ ...boolingState, loginStatus: false });
                localStorage.removeItem('isLogged');
            }
        })();
        return () => {
            controller.abort();
            setGetData(false);
        }
    }, [getData]);
    return [data];
}

export async function postData(body, url, setBoolingState, resetData) {
    const dataParams = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body)
    };

    try {
        const response = await fetch(`${endPoint}${url}`, dataParams);
        const responseData = await response.json();
        if (response.status === 200) {
            setBoolingState({});
            resetData({});
            console.log(responseData.data);
        }

    } catch (error) {
        console.log(error);
    }
}