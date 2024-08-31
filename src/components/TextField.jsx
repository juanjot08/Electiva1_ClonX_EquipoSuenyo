import React, { useState, useEffect } from 'react';
import "../styles/TextField.css";

const TextField = ({ setVisibleLabel, label, maxLength, counterDirection }) => {
    const [inputValue, setInputValue] = useState('');
    const [length, setLength] = useState(0);
    const [direction, setDirection] = useState(counterDirection);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        setLength(newValue.length);
    };

    useEffect(() => {
        // Adjust the direction based on the length changes
        if (length === 9 && length != maxLength) {
            setDirection(counterDirection);
        } else if (length === 10 && length != maxLength) {
            setDirection(counterDirection - 2);
        } else if (length === 100) {
            setDirection(counterDirection - 3);
        }
    }, [length, inputValue, counterDirection]);

    return (
        <>
            <div className="user-input-wrp">
                <input
                    type="text"
                    className="inputText"
                    required
                    onChange={handleChange}
                    maxLength={maxLength}
                />
                <span className='floating-label'>{label}</span>
                {setVisibleLabel && (
                    <span className='floating-counter' style={{ marginLeft: direction + '%' }}>
                        {length} /{maxLength}
                    </span>
                )}
            </div>
        </>
    );
};

export default TextField;
