export const ActivityAction = {
    CREATED_TICKET: "CREATED_TICKET",
    ASSIGNED_TICKET: "ASSIGNED_TICKET",
    MOVED_TICKET: "MOVED_TICKET",
    UPDATED_TICKET: "UPDATED_TICKET",
    COMMENTED_TICKET: "COMMENTED_TICKET",
    DELETED_COMMENT: "DELETED_COMMENT",
    EDITED_COMMENT: "EDITED_COMMENT",
} as const;

export type ActivityAction =
    (typeof ActivityAction)[keyof typeof ActivityAction];

export enum CredentialType {
    ADMIN = "ADMIN",
    Google = "GOOGLE",
    CUSTOMER_CREDENTIAL = "CUSTOMER_CREDENTIAL",
}

export enum UploadType {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
    PERSONAL = "PERSONAL",
}

export type IPermissionValue =
    | "NORMAL"
    | "NORMAL_SETTINGS"
    | "COMPANY_SETTINGS"
    | "SUPER_ADMIN_SETTINGS";

export type IPermissionType = {
    label: string;
    value: IPermissionValue;
};
export const PermissionTypes: IPermissionType[] = [
    {
        label: "Normal",
        value: "NORMAL",
    },
    {
        label: "Normal Settings",
        value: "NORMAL_SETTINGS",
    },
    {
        label: "Company Settings",
        value: "COMPANY_SETTINGS",
    },
    {
        label: "Super Admin Settings",
        value: "SUPER_ADMIN_SETTINGS",
    },
];
