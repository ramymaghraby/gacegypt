/* eslint-disable @typescript-eslint/naming-convention */
export class TokenModel {
  token!: string;
  refreshToken!: string;
}

export class DecodedTokenModel {
  Code!: string;
  FirstName!: string;
  LastName!: string;
  ArchiveAccount!: boolean;
  ServiceAccount!: boolean;
  DomainAdmin!: boolean;
  Applications!: string;
  ApplicationsArray!: ApplicationModel[];
  exp!: number;
}

export class ApplicationModel {
  Id!: number;
  Name!: string;
  Icon!: string;
}
export class UserApplicationModel {
  Code!: number;
  ApplicationFk!: number;
  AppRoleFk!: number;
  Application!: string;
  AppRole!: string;
}

export class LoginUserModel {
  username!: string;
  password!: string;
}
