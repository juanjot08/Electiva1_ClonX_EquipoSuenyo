import React, { useState } from 'react';
import "../styles/LoginTextField.css";

function LoginTextField({ data }) {
    const [mensaje, setMensaje] = useState('');
    const [inputText, setInputText] = useState('');

    const iconItems = [
        { id: 1, name: 'image', accept: null },
        { id: 2, name: 'gif_box', accept: 'image/gif' },
        { id: 3, name: 'page_info', accept: null },
        { id: 4, name: 'sentiment_satisfied', accept: null },
        { id: 5, name: 'calendar_clock', accept: null },
        { id: 6, name: 'location_on', accept: null },
    ];

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Lógica para manejar el archivo (por ejemplo, mostrar una vista previa)
        }
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.length <= 300) {
            setInputText(value);
        }
    };

    const percentage = (inputText.length / 300) * 100;

    return (
        <>
            <div className='container'>
                <div className='image-container'>
                    <a href="https://x.com/?lang=es">
                        <img src={data.img} alt="" className='img-container' />
                    </a>
                    <input
                        type="text"
                        placeholder='Que está pasando?'
                        className='login-inputText'
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='line'></div>

                <div className='items-container'>
                    <ul>
                        {iconItems.map(item => (
                            <li key={item.id}>
                                <span className="material-symbols-outlined">
                                    {item.name}
                                    {item.accept ? (
                                        <input
                                            type="file"
                                            className='file-item'
                                            onChange={handleFileChange}
                                            accept={item.accept}
                                        />
                                    ) : null}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className='counter-container'>
                        <div className='words-counter'>
                            <div className='circular-counter' style={{ background: `conic-gradient(rgb(29, 155, 240) ${percentage}%, transparent ${percentage}%)` }}>
                            </div>
                        </div>
                        <div className='frontal-container'>
                            <span className="material-symbols-outlined">
                                add_circle
                            </span>
                            <button>sebitas</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginTextField;
