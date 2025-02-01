import { useState, useEffect } from 'react';

const useCursorLocation = () => {
    const [cursorLocation, setCursorLocation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateCursorLocation = (event) => {
            setCursorLocation({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', updateCursorLocation);

        return () => {
            window.removeEventListener('mousemove', updateCursorLocation);
        };
    }, []);

    return cursorLocation;
};

export default useCursorLocation;