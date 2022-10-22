import { Column, Entity, PrimaryColumn } from 'typeorm'
import { IUser, PermissionLevel, RegistrationType } from 'types'
import { Meta } from './Meta'

@Entity()
export class Users extends Meta implements IUser {
  @PrimaryColumn('uuid')
  id: string

  @Column('text', {
    nullable: true,
  })
  email: string

  @Column('text', {
    nullable: false,
  })
  username: string

  @Column('text', {
    nullable: false,
  })
  displayName: string

  @Column('int', {
    default: PermissionLevel.User,
    nullable: false,
  })
  permissionLevel: PermissionLevel

  @Column('int', {
    nullable: false,
  })
  registrationType: RegistrationType

  @Column('text')
  specialRegistrationPassphrase: string
}
