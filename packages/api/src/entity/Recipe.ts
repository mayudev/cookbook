import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text')
  description: string
}
