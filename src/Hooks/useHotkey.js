import {useEffect, useCallback} from "react";

/**
 * @param {function} handler
 * @return {void}
 */
const useHotkey = (handler) => {
    const handleKeyPress = useCallback((e) => {
        handler(e.key.toLowerCase());
    }, [handler]);

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);

        return () => window.removeEventListener('keypress', handleKeyPress);
    }, [handleKeyPress]);
};

export default useHotkey;
