import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Recipe {
  @PrimaryColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text')
  description: string
}
