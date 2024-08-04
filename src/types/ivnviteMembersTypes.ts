export type CompanyTitlesList = "Acme Corp" | "Weyland-Yutani Corp" | "Tyrell Corp" | "Wallace  Corp" | ""
export type FunctionalTeamList = "HR" | "Finance" | "Custom Service" | "Logistics" | "Engineering"| "Design" | ""
export type PermissionType = "Admin" | "General"
export type ModeType = "company-selection" | "functional-team-assignment" | "invitee"
export type EmailErrorType = "Enter an email first please" | "This email is already in the list" | "Enter a correct email address please" | ""

export type CompaniesListTypes = {
    id: number,
    title: CompanyTitlesList
}

export type FunctionalTeamListTypes = {
    id: number,
    title: FunctionalTeamList
}

export type PermissionList = {
    title: PermissionType,
    set: boolean

}

export type StagedInvitationsListTypes = {
    email: string,
    permission: PermissionList[]
    isOpen:boolean
}

// export type PermissionTypes = {
//     id: string,
//     permission: PermissionListArrayTypes[]
// }


// export type PermissionListArrayTypes = {
//     permission: PermissionList
// }
