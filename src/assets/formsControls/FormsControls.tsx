import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error

    return (
        <div className={showError ? `${styles.formControl}  ${styles.error}` : `${styles.formControl}` }>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const showError = meta.touched && meta.error

    return (
        <div className={showError ? `${styles.formControl}  ${styles.error}` : `${styles.formControl}` }>
            <div>
                <input {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}