import React, {useState, MouseEvent} from 'react';
import classes from "./DropDownComponent.module.css";
import {CompaniesListTypes, CompanyTitlesList, FunctionalTeamListTypes} from "../../data/dataTypes";
import {CrossCircledIcon} from "@radix-ui/react-icons";

type DropDownType = {
    isDropdownCompanySelectOpen: boolean
    setIsDropdownCompanySelectOpen: (value: boolean) => void
    setCompany: (value: CompanyTitlesList) => void
    company: CompanyTitlesList
    mode: "company-selection" | "functional-team-assignment"
    isFunctionalTeamOpen: boolean
    setIsFunctionalTeamOpen: (value: boolean) => void
    team: FunctionalTeamListTypes[]
    setTeam: (value: FunctionalTeamListTypes[]) => void
    companiesList: CompaniesListTypes[]
    setCompaniesList: (value: CompaniesListTypes[]) => void
    functionalTeamList: FunctionalTeamListTypes[]
    setFunctionalTeamList: (value: FunctionalTeamListTypes[]) => void
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
                                                              setCompaniesList,
                                                              functionalTeamList,
                                                              setFunctionalTeamList
                                                          }) => {
    const[hover, setHover]=useState(false)
    const[hoverElementIndex, setHoverElementIndex]=useState<number | "">('')

    const stopPropHandler = () => {

    }
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
                (hover && hoverElementIndex === index) && <CrossCircledIcon
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

    return (
        mode === "company-selection" ?
            <>
                <div
                    className={classes.dropdown_company_selection}
                    onClick={() => setIsDropdownCompanySelectOpen(!isDropdownCompanySelectOpen)}
                >
                    <input type="text" value={company}/>
                    <div className={classes.chevron}>
                        <CrossCircledIcon/>
                    </div>
                </div>
                <div className={classes.dropdown_company_panel}>
                    {dropDownCompanyPanel}
                </div>
            </>
            :
            <>
                <div
                    className={classes.dropdown_team_selection}
                    onClick={() => setIsFunctionalTeamOpen(!isFunctionalTeamOpen)}
                >
                    <div className={classes.input}>
                        {addedFunctionalTeam}
                    </div>
                    {/*<div className={classes.cover_layer}></div>*/}
                </div>
                <div className={classes.dropdown_team_panel}>
                    {dropDownTeamPanel}
                </div>
            </>
    );
};

