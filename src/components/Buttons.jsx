import React, { useEffect, useState } from 'react'
import '../styles/Components/Buttons.css'

export const LargeButton = ({ name, label = "", fn, isDisabled = false, styleType = "primary", icon = "", boldText = false, customStyles = {} }) => {
    return (
        <div className='large_button_container'>
            <button
                className={`button ${styleType}-button`}
                type="button"
                onClick={fn}
                name={name}
                disabled={isDisabled}
                style={ customStyles }
            >
                {icon && icon()}
                <div className='text_button_container' style={boldText ? { fontWeight: 700 } : { fontWeight: 400 }} >
                    {label}
                </div>
            </button>
        </div>
    )
}

export const IconButton = ({ name, label = "", fn, isDisabled = false, icon = "", iconType = "primary", boldText = false, customStyles = "" }) => {
    const [circleColor, setCircleColor] = useState("none")
    const [textColor, setTextColor] = useState("#404245")
    const bgcolor = (iconType == "primary" ? "rgba(0, 0, 255, 0.3)" : iconType == "secondary" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)")
    const txtcolor = (iconType == "primary" ? "rgba(0, 0, 255, 1)" : iconType == "secondary" ? "rgba(255, 0, 0, 1)" : "rgba(0, 255, 0, 1)")
    return (
        <div>
            <button
                className={`button icon-button icon-${iconType}`}
                style={{ color: textColor, fill: textColor, customStyles }}
                type="button"
                onClick={fn}
                name={name}
                disabled={isDisabled}
                onMouseOver={() => {
                    setCircleColor(bgcolor)
                    setTextColor(txtcolor)
                }}
                onMouseOut={() => {
                    setCircleColor("none")
                    setTextColor("#404245")
                }}
            >
                <div className='circulo' style={{ background: circleColor }}>
                    {icon && icon()}
                </div>
                <div className='button_icon_text' style={boldText ? { fontWeight: 700 } : { fontWeight: 400 }}>
                    {label && label}
                </div>

            </button>


        </div>
    )
}

export const LinkTextButton = ({ boldText = "", normalText = "", fn = () => console.log("this is a test"), customStyles = "" }) => {
    return (
        <div>
            <a onClick={fn} style={{ customStyles }}>
                {boldText && <span style={{ fontWeight: 'bold', color: "white" }}>{boldText + " "}</span>}
                {normalText && <span>{normalText}</span>}
            </a>
        </div>
    )
}