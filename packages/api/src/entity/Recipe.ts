import { Column, Entity, PrimaryColumn } from 'typeorm'
import { Meta } from './Meta'

@Entity()
export class Recipe extends Meta {
  @PrimaryColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text')
  description: string
}
