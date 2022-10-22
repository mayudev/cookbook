export enum PermissionLevel {
  User,
  Moderator,
  Administrator,
}

export enum RegistrationType {
  Passwordless,
  Google,
  Special,
}

export interface IUser {
  id: string
  email: string
  username: string
  displayName: string

  permissionLevel: PermissionLevel
  registrationType: RegistrationType
  specialRegistrationPassphrase: string
}
