import React, {useState, MouseEvent} from 'react';
import classes from "./DropDownComponent.module.css";
import {
    CompaniesListTypes,
    CompanyTitlesList,
    FunctionalTeamListTypes, ModeType,
    PermissionList, StagedInvitationsListTypes,
} from "../../types/ivnviteMembersTypes";
import {ChevronDownIcon, CrossCircledIcon} from "@radix-ui/react-icons";

type DropDownType = {
    isDropdownCompanySelectOpen: boolean
    setIsDropdownCompanySelectOpen: (value: boolean) => void
    setCompany: (value: CompanyTitlesList) => void
    company: CompanyTitlesList
    mode: ModeType
    isFunctionalTeamOpen: boolean
    setIsFunctionalTeamOpen: (value: boolean) => void
    team: FunctionalTeamListTypes[]
    setTeam: (value: FunctionalTeamListTypes[]) => void
    companiesList: CompaniesListTypes[]
    setCompaniesList: (value: CompaniesListTypes[]) => void
    functionalTeamList: FunctionalTeamListTypes[]
    setFunctionalTeamList: (value: FunctionalTeamListTypes[]) => void
    invitee?: StagedInvitationsListTypes
    stagedInvitationsList: StagedInvitationsListTypes[]
    setStagedInvitationsList: (value: StagedInvitationsListTypes[]) => void

}
export const DropDownComponent: React.FC<DropDownType> = ({
                                                              isDropdownCompanySelectOpen,
                                                              setIsDropdownCompanySelectOpen,
                                                              setCompany,
                                                              company,
                                                              mode,
                                                              isFunctionalTeamOpen,
                                                              setIsFunctionalTeamOpen,
                                                              team,
                                                              setTeam,
                                                              companiesList,
                                                              functionalTeamList,
                                                              setFunctionalTeamList,
                                                              invitee,
                                                              stagedInvitationsList,
                                                              setStagedInvitationsList

                                                          }) => {
    const[hover, setHover]=useState(false)
    const[hoverElementIndex, setHoverElementIndex]=useState<number | "">('')

    const addedFunctionalTeam = team.map((team, index) => (
        <div key={index} className={classes.tag}>
            <div
                className={classes.tag_item}
                onMouseEnter={()=>(
                    setHover(true),
                    setHoverElementIndex(index)
                )}
                onMouseLeave={()=>(
                    setHover(false),
                    setHoverElementIndex("")
                )}
                onClick={(e) => e.stopPropagation()}
            >{team.title}</div>
            {
                (hover && hoverElementIndex === index) &&
                <CrossCircledIcon
                    className={classes.cross_icon}
                    onMouseEnter={()=>(
                        setHover(true),
                        setHoverElementIndex(index)
                    )}
                    onMouseLeave={()=>(
                        setHover(false),
                        setHoverElementIndex("")
                    )}
                    onClick={(e) => removeFunctionalTeamHandler(e,team)}
                />
            }
        </div>
    ))
    const setFunctionalTeamHandler = (addedTeam: FunctionalTeamListTypes) => {
        const functionalTeamListWithoutAddedTeam = functionalTeamList.filter(teamItem => teamItem.id !== addedTeam.id && teamItem)
        setFunctionalTeamList(functionalTeamListWithoutAddedTeam)
        setTeam([...team, {id: addedTeam.id, title: addedTeam.title}])
        setIsFunctionalTeamOpen(false)
    }
    const removeFunctionalTeamHandler = (e:MouseEvent<SVGElement>,removedTeam: FunctionalTeamListTypes) => {
        e.stopPropagation()
        const functionalTeamListWithRemovedTeam = [...functionalTeamList, removedTeam]
        setFunctionalTeamList(functionalTeamListWithRemovedTeam)
        const newTeam = team.filter(teamItem => teamItem.id !== removedTeam.id && teamItem)
        setTeam(newTeam)
        setIsFunctionalTeamOpen(false)
    }

    const dropDownCompanyPanel = companiesList.length > 0 && isDropdownCompanySelectOpen && companiesList.map((company, index) => (
        <div
            key={index}
            className={classes.dropdown_company_selection_opened}
            onClick={() => {
                setCompany(company.title)
                setIsDropdownCompanySelectOpen(false)
            }}
        >
            {company.title}
        </div>
    ))

    const dropDownTeamPanel = functionalTeamList.length > 0 && isFunctionalTeamOpen && functionalTeamList.map((teamItem, index) => (
        <div
            key={index}
            className={classes.dropdown_team_panel_opened}
            onClick={() => setFunctionalTeamHandler(teamItem)}
        >
            {teamItem.title}
        </div>
    ))

    const setPermissionHandlerAndCloseInviteeHandler = (inviteeValue:StagedInvitationsListTypes) => {

        const stageInvitationsListWithChangedPermission = stagedInvitationsList.map(invitee => invitee.email.toLowerCase() === inviteeValue.email.toLowerCase() ? {
                ...invitee, isOpen: !invitee.isOpen,
                    permission: invitee.permission.map(item => ({title:item.title, set:!item.set}))
        } : invitee)

        console.log("stagedInvitationsListWithChangedPermission:",stageInvitationsListWithChangedPermission)

        setStagedInvitationsList(stageInvitationsListWithChangedPermission)
    }

    const dropDownInviteePanel =  invitee?.isOpen && stagedInvitationsList.map((inviteeItem, index) =>
        invitee.email.toLowerCase() === inviteeItem.email.toLowerCase() && (
        <div
            key={index}
            className={classes.dropdown_invitee_selection_opened}
            onClick={() => setPermissionHandlerAndCloseInviteeHandler(inviteeItem)}
        >
            {inviteeItem.permission.map(item => (item.set === false && item.title))}
        </div>
    ))



    const openInviteeHandler = (email?:string) => {
        const openItemOfstagedInvitationsList = stagedInvitationsList.map((inviteeItem) => inviteeItem.email.toLowerCase() === email?.toLowerCase() ? {
            ...inviteeItem, isOpen: !inviteeItem.isOpen
        } : inviteeItem)
        setStagedInvitationsList(openItemOfstagedInvitationsList)
    }

    return (
                mode === "company-selection" ?
                    <>
                        <div
                            className={classes.dropdown_company_selection}
                            onClick={() => setIsDropdownCompanySelectOpen(!isDropdownCompanySelectOpen)}
                        >
                            <input type="text" value={company} readOnly/>
                            <div className={classes.chevron}>
                                <ChevronDownIcon/>
                            </div>
                        </div>
                        <div className={classes.dropdown_company_panel}>
                            {dropDownCompanyPanel}
                        </div>
                    </>
                : mode === "functional-team-assignment" ?
                        <>
                            <div
                                className={classes.dropdown_team_selection}
                                onClick={() => setIsFunctionalTeamOpen(!isFunctionalTeamOpen)}
                            >
                                <div className={classes.input}>
                                    {addedFunctionalTeam}
                                </div>
                            </div>
                            <div className={classes.dropdown_team_panel}>
                                {dropDownTeamPanel}
                            </div>
                        </>
                :
                        <>
                            <div
                                className={classes.dropdown_invitee_selection}
                                onClick={() => openInviteeHandler(invitee?.email)}
                            >

                                <div className={classes.input_invitee}>
                                    {invitee && invitee.permission.map(item => item.set && item.title)}
                                    <div>
                                        <ChevronDownIcon className={classes.invitee_chevron}/>
                                    </div>
                                </div>

                            </div>
                            <div className={classes.dropdown_invitee_panel}>
                                {dropDownInviteePanel}
                            </div>
                        </>


    );
};

