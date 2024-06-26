import React from 'react'



export const FormInputComponent = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
                )}
            <input className='form-input' {...otherProps} />
        </div>

    )
}