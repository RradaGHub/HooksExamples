import React, { useEffect, useState } from 'react'


const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {

        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);

        setState({
            data,
            isLoading: false,
            hasError: null
        });
        // console.log(data)
    }

    useEffect(() => {

        getFetch();

    }, [url]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };

}

export default useFetch
