import React, {FocusEvent, useState} from 'react';
import classes from "./InviteMembers.module.css"
import {DropDownComponent} from "../../components/DropDownComponent/DropDownComponent";
import {
    CompaniesListTypes,
    CompanyTitlesList,
    FunctionalTeamListTypes,
    StagedInvitationsListTypes
} from "../../data/dataTypes";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";

export const InviteMembers = () => {
    const[companiesList, setCompaniesList] = useState<CompaniesListTypes[]>([
        {id:1, title: "Acme Corp"},
        {id:2, title: "Weyland-Yutani Corp"},
        {id:3, title: "Tyrell Corp"},
        {id:4, title: "Wallace  Corp"},
    ])

    const[functionalTeamList, setFunctionalTeamList] = useState<FunctionalTeamListTypes[]>([
        {id:1, title: "HR"},
        {id:2, title: "Finance"},
        {id:3, title: "Custom Service"},
        {id:4, title: "Logistics"},
        {id:5, title: "Engineering"},
        {id:6, title: "Design"},
    ])
    const [emailInputFieldValue, setEmailInputFieldValue] = useState<string>("")
    const [emailInputFieldValueError, setEmailInputFieldError] = useState<boolean>(false)
    const [isDropdownCompanySelectOpen, setIsDropdownCompanySelectOpen] = useState<boolean>(false)
    const [isFunctionalTeamOpen, setIsFunctionalTeamOpen] = useState<boolean>(false)
    const [company, setCompany] = useState<CompanyTitlesList>("")
    const [team, setTeam]=useState<FunctionalTeamListTypes[] | []>([])
    const [stagedInvitationsList, setStagedInvitationsList]=useState<StagedInvitationsListTypes[] | []>([])




    return (
        <div className={classes.container} >
            <h2 className={classes.text}>Invite Members</h2>
            <div className={classes.textbox}>
                <Input
                    emailInputFieldValue={emailInputFieldValue}
                    setEmailInputFieldValue={setEmailInputFieldValue}
                    emailInputFieldValueError={emailInputFieldValueError}
                />
                <Button
                    emailInputFieldValue={emailInputFieldValue}
                    emailInputFieldValueError={emailInputFieldValueError}
                    setEmailInputFieldError={setEmailInputFieldError}
                    stagedInvitationsList={stagedInvitationsList}
                    setStagedInvitationsList={setStagedInvitationsList}
                />
            </div>

            <DropDownComponent isDropdownCompanySelectOpen={isDropdownCompanySelectOpen}
                               setIsDropdownCompanySelectOpen={setIsDropdownCompanySelectOpen}
                               setCompany={setCompany}
                               company={company}
                               mode={"company-selection"}
                               isFunctionalTeamOpen={isFunctionalTeamOpen}
                               setIsFunctionalTeamOpen={setIsFunctionalTeamOpen}
                               team={team}
                               setTeam={setTeam}
                               companiesList={companiesList}
                               setCompaniesList={setCompaniesList}
                               functionalTeamList={functionalTeamList}
                               setFunctionalTeamList={setFunctionalTeamList}
            />


            <div className={classes.group}>
                <h2 className={classes.group_text}>Functional Team</h2>
            <DropDownComponent isDropdownCompanySelectOpen={isDropdownCompanySelectOpen}
                               setIsDropdownCompanySelectOpen={setIsDropdownCompanySelectOpen}
                               setCompany={setCompany}
                               company={company}
                               mode={"functional-team-assignment"}
                               isFunctionalTeamOpen={isFunctionalTeamOpen}
                               setIsFunctionalTeamOpen={setIsFunctionalTeamOpen}
                               team={team}
                               setTeam={setTeam}
                               companiesList={companiesList}
                               setCompaniesList={setCompaniesList}
                               functionalTeamList={functionalTeamList}
                               setFunctionalTeamList={setFunctionalTeamList}
            />
                {/*<div className={classes.rectangle}>*/}
                {/*    <div className={classes.tag}>*/}
                {/*        <div className={classes.tag_item}>sdcsdcscdscdsd</div>*/}
                {/*        <button className={classes.delete_group}></button>*/}
                {/*    </div>*/}
                {/*</div>*/}
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
                    stagedInvitationsList.map((inviteeEmail, index) => (
                        <tr>
                            <td>
                                <div className={classes.avatar}></div>
                                <div>{inviteeEmail.email}</div>
                            </td>
                            <td>
                                <div className={classes.dropdown_permission}>
                                    <input type="text" value={inviteeEmail.permission}/>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                {/*<tr>*/}
                {/*    <td>*/}
                {/*        <div className={classes.avatar}></div>*/}
                {/*        <div>HTML tables</div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*        <div className={classes.dropdown_permission}>*/}
                {/*            <input type="text"/>*/}
                {/*        </div>*/}
                {/*    </td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>*/}
                {/*        <div className={classes.avatar}></div>*/}
                {/*        <div>Hanzulator</div>*/}
                {/*    </td>*/}
                {/*    <td>*/}
                {/*        <div className={classes.dropdown_permission}>*/}
                {/*            <input type="text"/>*/}
                {/*        </div>*/}
                {/*    </td>*/}
                {/*</tr>*/}
                </tbody>
            </table>

            <button className={classes.btn_request}>Send Requests</button>
        </div>
    );
};

