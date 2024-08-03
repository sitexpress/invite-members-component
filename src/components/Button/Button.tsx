import React, {FocusEvent} from 'react';
import classes from "./Button.module.css"
import {PermissionType, StagedInvitationsListTypes} from "../../data/dataTypes";

type ButtonTypes = {
    emailInputFieldValue: string
    emailInputFieldValueError: boolean
    setEmailInputFieldError: (value: boolean) => void
    stagedInvitationsList: StagedInvitationsListTypes[]
    setStagedInvitationsList: (value: StagedInvitationsListTypes[]) => void
}
export const Button: React.FC<ButtonTypes> = ({
                                                  emailInputFieldValue,
                                                  emailInputFieldValueError,
                                                  setEmailInputFieldError,
                                                  stagedInvitationsList,
                                                  setStagedInvitationsList
                                              }) => {
    const buttonOnclickHandler = () => {
        if(!!emailInputFieldValue.trim() === false) return setEmailInputFieldError(true)

        setEmailInputFieldError(false)

        const checkDobulePositions = stagedInvitationsList.findIndex((addedemail) => addedemail.email === emailInputFieldValue)
        console.log('checkDobulePositions:',checkDobulePositions)
        if (checkDobulePositions !== -1) return setEmailInputFieldError(true)

        setEmailInputFieldError(false)
        const newInviteeEmail = {
            email:emailInputFieldValue,
            permission: "General" as PermissionType
        }

        const newInviteeList = [...stagedInvitationsList, newInviteeEmail]

        setStagedInvitationsList(newInviteeList)
    }


    return (
        <button
            className={classes.button}
            onClick={buttonOnclickHandler}
        >Enter</button>
    );
};

