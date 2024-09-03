import React, { useEffect, useState } from 'react'
import '../styles/components/Buttons.css'
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
 * @param {string} [props.customClass=''] Clase personalizable de css del boton.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
export const LargeButton = ({ name, label = "", fn, isDisabled = false, styleType = "primary", icon = "", boldText = false, customStyles = {}, customClass = "" }) => {
    return (
        <div className={`large_button_container`}>
            <button
                className={`button ${styleType}-button ${customClass}`}
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
 * @param {string} [props.customClass=''] Clase personalizable de css del contenedor principal.
 * @param {string} [props.styleType='primary'] Indica el estilo de los botones, (primary, secondary, tertiary).
 * @param {object} [props.icon=''] Le agrega un boton al boton al lado izquierdo.
 * @param {boolean} [props.boldText=false] Indica si el texto del boton es con negrilla.
 * @param {string} [props.customStyles=''] Objeto con opciones de estilo adicionales para el botón.
 * @param {string} [props.color='#404245'] Color del texto y de los svg dentro del boton.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
export const IconButton = ({ name, label = "", fn, isDisabled = false, customClass = "", icon = "", iconType = "primary", boldText = false, customStyles = {}, color = "#404245", circleLenght = "32px" }) => {
    const [circleColor, setCircleColor] = useState("none")
    const [textColor, setTextColor] = useState(color)
    const bgcolor = (iconType == "primary" ? "#181818" : iconType == "secondary" ? "rgba(255, 0, 0, 0.3)" : "rgba(0, 255, 0, 0.3)")
    const txtcolor = (iconType == "primary" ? "#181818" : iconType == "secondary" ? "rgba(255, 0, 0, 1)" : "rgba(0, 255, 0, 1)")

    const defaultStyles = {
        color: textColor, fill: textColor
    }

    const combinedStyles = { ...defaultStyles, ...customStyles };

    return (
        <button
            className={`button icon-button icon-${iconType} ${customClass}`}
            style={combinedStyles}
            type="button"
            onClick={fn}
            name={name}
            disabled={isDisabled}
            onMouseOver={() => {
                setCircleColor(bgcolor)
                setTextColor(color === "#404245" ? txtcolor : color)
            }}
            onMouseOut={() => {
                setCircleColor("none")
                setTextColor(color)
            }}
        >
            <div className='circulo' style={{
                background: circleColor, width: circleLenght, height: circleLenght
            }}>
                {icon && icon()}
            </div>
            <div className='button_icon_text' style={boldText ? { fontWeight: 700 } : { fontWeight: 400 }}>
                {label && label}
            </div>

        </button>
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
 * @param {string} [props.customClass=''] Clase personalizable de css del contenedor principal.
 *
 * @returns {JSX.Element} Elemento JSX del componente.
 */
export const LinkTextButton = ({ boldText = "", normalText = "", fn = () => console.log("this is a test"), customStyles = "", customClass = "" }) => {
    return (
        <div>
            <a onClick={fn} style={{ customStyles }} className={`${customClass}`}>
                {boldText && <span style={{ fontWeight: 'bold', color: "white" }}>{boldText + " "}</span>}
                {normalText && <span>{normalText}</span>}
            </a>
        </div>
    )
}