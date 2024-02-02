import React from 'react'
import './ButtonCSS.css'


const BUTTON_TYPE_CLASSES = {
    google: "google-sing-in",
    inverted: "inverted",
}

export const ButtonComponent = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >{children}</button>
    )
}
