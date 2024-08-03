import React, {useState,FocusEvent,FormEvent } from 'react';
import classes from "./Input.module.css"

type InputComponentTypes = {
    emailInputFieldValue: string
    setEmailInputFieldValue: (value:string) => void
    emailInputFieldValueError: boolean;
}
export const Input:React.FC<InputComponentTypes> = ({
                                                                emailInputFieldValue,
                                                                setEmailInputFieldValue,
                                                                emailInputFieldValueError,
                                                            }) => {
    const [focus, setFocus] = useState(false)

    const onFocusHandler = (e:FocusEvent<HTMLInputElement>) => {
            if (e.currentTarget === e.target) {
                setFocus(true)
            }
    }

    const onBlurHandler = (e:FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget === e.target) {
            setFocus(false)
        }
    }

    const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setEmailInputFieldValue(newValue)

    }

    return (
        <>
            {
                emailInputFieldValueError &&
                <span className={classes.error_message}>Enter an email first please</span>
            }

            <input
                value={emailInputFieldValue}
                type="text"
                placeholder={focus ? "" : "Enter email address" }
                onChange={(e) => onChangeHandler(e)}
                onFocus={(e) => onFocusHandler(e)}
                onBlur={(e) => onBlurHandler(e)}
            />
        </>

    )
};

