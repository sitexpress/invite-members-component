export type CompanyTitlesList = "Acme Corp" | "Weyland-Yutani Corp" | "Tyrell Corp" | "Wallace  Corp" | ""
export type FunctionalTeamList = "HR" | "Finance" | "Custom Service" | "Logistics" | "Engineering"| "Design" | ""


export type CompaniesListTypes = {
    id: number,
    title: CompanyTitlesList
}

export type FunctionalTeamListTypes = {
    id: number,
    title: FunctionalTeamList
}

export type StagedInvitationsListTypes = {
    email: string,
    permission: PermissionType
}
export type PermissionType = "Admin" | "General"
