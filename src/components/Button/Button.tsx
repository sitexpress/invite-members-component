import React, {FocusEvent} from 'react';
import classes from "./Button.module.css"
import {
    EmailErrorType,
    PermissionList,
    PermissionType,
    StagedInvitationsListTypes
} from "../../types/ivnviteMembersTypes";
import {validateEmail} from "../../hooks/validate";

type ButtonTypes = {
    emailInputFieldValue: string
    setEmailInputFieldValue: (value: string) => void
    emailInputFieldValueError: EmailErrorType
    setEmailInputFieldError: (value: EmailErrorType) => void
    stagedInvitationsList: StagedInvitationsListTypes[]
    setStagedInvitationsList: (value: StagedInvitationsListTypes[]) => void
}
export const Button: React.FC<ButtonTypes> = ({
                                                  emailInputFieldValue,
                                                  setEmailInputFieldValue,
                                                  setEmailInputFieldError,
                                                  stagedInvitationsList,
                                                  setStagedInvitationsList
                                              }) => {
    const buttonOnclickHandler = () => {
        if(emailInputFieldValue.trim().length === 0) return setEmailInputFieldError("Enter an email first please")
        setEmailInputFieldError("")
        // const isEmailValidation = validateEmail(emailInputFieldValue.trim())
        // if (isEmailValidation === null) return setEmailInputFieldError("Enter a correct email address please")
        // console.log("isEmailValidation:",isEmailValidation)
        // setEmailInputFieldError("")

        const checkDobulePositions = stagedInvitationsList.findIndex((addedEmail) => addedEmail.email.toLowerCase() === emailInputFieldValue.toLowerCase())
        console.log('checkDobulePositions:',checkDobulePositions)
        if (checkDobulePositions !== -1) return setEmailInputFieldError("This email is already in the list")
        setEmailInputFieldError("")

        const isEmailValidation = validateEmail(emailInputFieldValue.trim())
        if (isEmailValidation === null) return setEmailInputFieldError("Enter a correct email address please")
        console.log("isEmailValidation:",isEmailValidation)
        setEmailInputFieldError("")

        const newInviteeEmail = {
            email:emailInputFieldValue.trim(),
            isOpen:false,
            permission: [
                {
                    title: "General" as PermissionType,
                    set: true
                },
                {
                    title: "Admin" as PermissionType,
                    set: false
                }
            ]
        }


        const newInviteeList = [...stagedInvitationsList, newInviteeEmail]
        setStagedInvitationsList(newInviteeList)
        setEmailInputFieldValue("")
    }


    return (
        <button
            className={classes.button}
            onClick={buttonOnclickHandler}
        >Enter</button>
    );
};

