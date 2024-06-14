import {useState,useEffect} from 'react';

const useDebounce = (value, delay = 500, condition = true) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const handler = setTimeout(() => {
                if (condition) {
                    setDebouncedValue(value);
                }
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );

    return debouncedValue;
}

export default useDebounce;
