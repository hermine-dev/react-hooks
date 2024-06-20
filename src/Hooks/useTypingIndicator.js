import {useState} from 'react';

// eslint-disable-next-line
let typingTimeOut;
let notTypingTimeout;

const useTypingIndicator = (key, onKeyDown) => {
    const [pressed, SetPressed] = useState(false);

    const handleKeyDown = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 8) {
            if (!pressed) {
                typingTimeOut = setTimeout(() => {
                    emitSocket('typing', {[key]: true});
                }, 600);
                SetPressed(true);
            }
        }

        onKeyDown && onKeyDown(e);
    };

    const handleKeyUp = () => {
        clearTimeout(notTypingTimeout);
        if (pressed) {
            notTypingTimeout = setTimeout(() => {
                SetPressed(false);
                emitSocket('typing', {[key]: false});
            }, 3000);

        }
    };

    return {
        onKeyUp: handleKeyUp,
        onKeyDown: handleKeyDown,
    }
};

export default useTypingIndicator;
