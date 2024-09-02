import React, { useEffect, useState } from 'react'
import '../styles/Components/Buttons.css'
/**
 * Componente de botón largo personalizable.
 *
 * @param {object} props Propiedades del componente.
 * @param {string} props.name Nombre del botón (usado para identificarlo y asignarlo a variables).
 * @param {string} props.label Etiqueta del botón (texto a mostrar).
 * @param {function(event)} [props.fn] Función a ejecutar cuando se hace clic en el botón. Recibe el evento del clic como parámetro.
 * @param {boolean} [props.disabled=false] Indica si el botón debe estar deshabilitado (no se podrá hacer clic).
 * @param {string} [props.styleType='primary'] Indica el estilo de los botones, (primary, secondary, tertiary).
 * @param {object} [props.icon=''] Le agrega un boton al boton al lado izquierdo.
 * @param {boolean} [props.boldText=false] Indica si el texto del boton es con negrilla.
 * @param {string} [props.customStyles=''] Objeto con opciones de estilo adicionales para el botón.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
export const LargeButton = ({ name, label = "", fn, isDisabled = false, styleType = "primary", icon = "", boldText = false, customStyles = {} }) => {
    return (
        <div className='large_button_container'>
            <button
                className={`button ${styleType}-button`}
                type="button"
                onClick={fn}
                name={name}
                disabled={isDisabled}
                style={customStyles}
            >
                {icon && icon()}
                <div className='text_button_container' style={boldText ? { fontWeight: 700 } : { fontWeight: 400 }} >
                    {label}
                </div>
            </button>
        </div>
    )
}

/**
 * Componente de botón icono personalizable.
 *
 * @param {object} props Propiedades del componente.
 * @param {string} props.name Nombre del botón (usado para identificarlo y asignarlo a variables).
 * @param {string} [props.label=""] Etiqueta del botón (texto a mostrar).
 * @param {function(event)} [props.fn] Función a ejecutar cuando se hace clic en el botón. Recibe el evento del clic como parámetro.
 * @param {boolean} [props.disabled=false] Indica si el botón debe estar deshabilitado (no se podrá hacer clic).
 * @param {string} [props.styleType='primary'] Indica el estilo de los botones, (primary, secondary, tertiary).
 * @param {object} [props.icon=''] Le agrega un boton al boton al lado izquierdo.
 * @param {boolean} [props.boldText=false] Indica si el texto del boton es con negrilla.
 * @param {string} [props.customStyles=''] Objeto con opciones de estilo adicionales para el botón.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
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

/**
 * Componente de botón largo personalizable.
 *
 * @param {object} props Propiedades del componente.
 * @param {string} props.name Nombre del botón (usado para identificarlo y asignarlo a variables).
 * @param {string} props.boldText Indica el texto en negrilla a mostrar (texto a mostrar).
 * @param {string} props.normalText Indica el texto a mostrar (texto a mostrar).
 * @param {function(event)} [props.fn] Función a ejecutar cuando se hace clic en el botón. Recibe el evento del clic como parámetro.
 * @param {string} [props.customStyles=''] Objeto con opciones de estilo adicionales para el botón.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
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