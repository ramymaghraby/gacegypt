/* eslint-disable @typescript-eslint/naming-convention */
export class ApplicationPagePermission {
  id!: number;
  parentFk!: string;
  name!: string;
  icon!: string;
  title!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routerLink?: any;
  model!: string;
  pView!: boolean;
  pCreate!: boolean;
  pEdit!: boolean;
  controls!: AppControls[];
}

export class AppControls {
  name!: string;
  icon!: string;
  caption!: string;
  pVisible!: boolean;
  pReadOnly!: boolean;
  pEditable!: boolean;
}

export class UserPermission {
  code!: number;
  applicationFk!: number;
}

export class MenuModel {
  label!: string;
  icon!: string;
  items!: MenuItem[];
}

export class MenuItem {
  label!: string;
  icon!: string;
  routerLink!: string[];
  badge!: string;
  badgeClass!: string;
}

export class ApplicationPageMenuModel {
  id!: number;
  name!: string;
  icon!: string;
  parentFk!: number;
  title!: string;
  route!: string;
  model!: string;
  subMenuPages!: [];
}

export class UserApplicationRoleModel {
  code!: number;
  applicationFk!: number;
  appRoleFk!: number;
  application!: string;
  appRole!: string;
}

export class RolesModel {
  id?: number;
  name!: string;
  count?: number;
}
