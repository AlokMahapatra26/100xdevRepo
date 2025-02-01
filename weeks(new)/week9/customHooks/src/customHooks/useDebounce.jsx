import { useState, useEffect } from 'react';

function useDebounce(val , delay){

    const [debouncedVal, setDebouncedValue] = useState();

    useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedValue(val);
        }, delay);

        return () => {
            clearTimeout(handler);
        };


    },[val , delay]);

    return debouncedVal;
}

export default useDebounce;