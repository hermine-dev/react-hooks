import {useState} from "react";

const useZoomOnScroll = () => {
    const [scale, SetScale] = useState(1);

    const normalizeNumber = (number) => {
        return Math.round(number * 10) / 10;
    };

    const zoomIn = () => {
        SetScale((prevState) => prevState < 1 ? normalizeNumber(prevState + 0.1) : prevState);
    };

    const zoomOut = () => {
        SetScale((prevState) => prevState > 0.3 ? normalizeNumber(prevState - 0.1) : prevState);
    };

    const handleMouseWheel = (e) => {
        if (!e.ctrlKey) {
            return;
        }

        e.preventDefault();

        if (e.deltaY > 0) {
            SetScale((prevState) => {
                return prevState > 0.3 ? prevState - 0.1 : prevState;
            });
        } else if (e.deltaY < 0) {
            SetScale((prevState) => {
                return prevState < 1 ? prevState + 0.1 : prevState;
            });
        }
    };

    return {
        scale,
        handleMouseWheel,
        zoomIn,
        zoomOut,
    };
};

export default useZoomOnScroll;
