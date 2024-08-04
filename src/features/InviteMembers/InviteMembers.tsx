import React, {FocusEvent, useState} from 'react';
import classes from "./InviteMembers.module.css"
import {DropDownComponent} from "../../components/DropDownComponent/DropDownComponent";
import {
    CompaniesListTypes,
    CompanyTitlesList, EmailErrorType,
    FunctionalTeamListTypes, PermissionList,
    StagedInvitationsListTypes
} from "../../types/ivnviteMembersTypes";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {PersonIcon} from "@radix-ui/react-icons";

export const InviteMembers = () => {
    const [companiesList, setCompaniesList] = useState<CompaniesListTypes[]>([
        {id: 1, title: "Acme Corp"},
        {id: 2, title: "Weyland-Yutani Corp"},
        {id: 3, title: "Tyrell Corp"},
        {id: 4, title: "Wallace  Corp"},
    ])

    const [functionalTeamList, setFunctionalTeamList] = useState<FunctionalTeamListTypes[]>([
        {id: 1, title: "HR"},
        {id: 2, title: "Finance"},
        {id: 3, title: "Custom Service"},
        {id: 4, title: "Logistics"},
        {id: 5, title: "Engineering"},
        {id: 6, title: "Design"},
    ])
    const [emailInputFieldValue, setEmailInputFieldValue] = useState<string>("")
    const [emailInputFieldValueError, setEmailInputFieldError] = useState<EmailErrorType>("")

    const [isDropdownCompanySelectOpen, setIsDropdownCompanySelectOpen] = useState<boolean>(false)
    const [company, setCompany] = useState<CompanyTitlesList>("")

    const [isFunctionalTeamOpen, setIsFunctionalTeamOpen] = useState<boolean>(false)
    const [team, setTeam] = useState<FunctionalTeamListTypes[] | []>([])

    // const [inviteePermLevel, setInviteePermLevel] = useState<PermissionList>("General")
    const [stagedInvitationsList, setStagedInvitationsList] = useState<StagedInvitationsListTypes[] | []>([])



    return (
        <div className={classes.container}>
            <h2 className={classes.text}>Invite Members</h2>
            <div className={classes.textbox}>
                <Input
                    emailInputFieldValue={emailInputFieldValue}
                    setEmailInputFieldValue={setEmailInputFieldValue}
                    emailInputFieldValueError={emailInputFieldValueError}
                />
                <Button
                    emailInputFieldValue={emailInputFieldValue}
                    setEmailInputFieldValue={setEmailInputFieldValue}
                    emailInputFieldValueError={emailInputFieldValueError}
                    setEmailInputFieldError={setEmailInputFieldError}
                    stagedInvitationsList={stagedInvitationsList}
                    setStagedInvitationsList={setStagedInvitationsList}
                />
            </div>

            <DropDownComponent mode="company-selection"
                               isDropdownCompanySelectOpen={isDropdownCompanySelectOpen}
                               setIsDropdownCompanySelectOpen={setIsDropdownCompanySelectOpen}
                               setCompany={setCompany}
                               company={company}
                               isFunctionalTeamOpen={isFunctionalTeamOpen}
                               setIsFunctionalTeamOpen={setIsFunctionalTeamOpen}
                               team={team}
                               setTeam={setTeam}
                               companiesList={companiesList}
                               setCompaniesList={setCompaniesList}
                               functionalTeamList={functionalTeamList}
                               setFunctionalTeamList={setFunctionalTeamList}
                               stagedInvitationsList={stagedInvitationsList}
                               setStagedInvitationsList={setStagedInvitationsList}
            />


            <div className={classes.group}>
                <h2 className={classes.group_text}>Functional Team</h2>
                <DropDownComponent mode="functional-team-assignment"
                                   isDropdownCompanySelectOpen={isDropdownCompanySelectOpen}
                                   setIsDropdownCompanySelectOpen={setIsDropdownCompanySelectOpen}
                                   setCompany={setCompany}
                                   company={company}
                                   isFunctionalTeamOpen={isFunctionalTeamOpen}
                                   setIsFunctionalTeamOpen={setIsFunctionalTeamOpen}
                                   team={team}
                                   setTeam={setTeam}
                                   companiesList={companiesList}
                                   setCompaniesList={setCompaniesList}
                                   functionalTeamList={functionalTeamList}
                                   setFunctionalTeamList={setFunctionalTeamList}
                                   stagedInvitationsList={stagedInvitationsList}
                                   setStagedInvitationsList={setStagedInvitationsList}
                />
            </div>
            <table className={classes.table}>
                <thead className={classes.table_head}>
                <tr className={classes.table_head_row}>
                    <th scope="col" className={classes.table_heading_text}>Email</th>
                    <th scope="col" className={classes.table_heading_text}>Permission</th>
                </tr>
                </thead>
                <tbody className={classes.table_body}>
                {
                    stagedInvitationsList.map((invitee, index) => (
                        <tr>
                            <td>

                                <div className={classes.avatar}>
                                    <PersonIcon className={classes.person_icon}/>
                                </div>
                                <div>{invitee.email}</div>
                            </td>
                            <td>
                                <div className={classes.dropdown_permission}>
                                    <DropDownComponent mode="invitee"
                                                       isDropdownCompanySelectOpen={isDropdownCompanySelectOpen}
                                                       setIsDropdownCompanySelectOpen={setIsDropdownCompanySelectOpen}
                                                       setCompany={setCompany}
                                                       company={company}
                                                       isFunctionalTeamOpen={isFunctionalTeamOpen}
                                                       setIsFunctionalTeamOpen={setIsFunctionalTeamOpen}
                                                       team={team}
                                                       setTeam={setTeam}
                                                       companiesList={companiesList}
                                                       setCompaniesList={setCompaniesList}
                                                       functionalTeamList={functionalTeamList}
                                                       setFunctionalTeamList={setFunctionalTeamList}
                                                       invitee={invitee}
                                                       stagedInvitationsList={stagedInvitationsList}
                                                       setStagedInvitationsList={setStagedInvitationsList}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className={classes.btn_wrapper}>
                <button className={classes.btn_request}>Send Requests</button>
            </div>
        </div>
    );
};

