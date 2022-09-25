import { UserApplicationModel } from './token-model';

export class UserDataModel {
    id!: number;
    code!: string;
    name!: string;
    firstName!: string;
    company!: string;
    branch!: string;
    department!: string;
    jobTitle!: string;
    extension!: string;
    directPhone!: string;
    mobile1!: string;
    mobile2!: string;
    officialEmail!: string;
    personalEmail!: string;
    photo!: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Applications!: string[];
    isLoggedIn!: boolean;
}

export class ActiveDirectoryUserModel {
    accountName!: string;
    firstName!: string;
    lastName!: string;
    displayName!: string;
    email!: string;
    office!: string;
    hrCode!: string;
    enabled!: boolean;
    domainAdmin!: boolean;
    archiveAccount!: boolean;
    serviceAccount!: boolean;
    passwordExpiryDate!: string;
    applications?: UserApplicationModel[];
}
