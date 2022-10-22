import { Column, Entity, PrimaryColumn } from 'typeorm'
import { IRecipe } from 'types'
import { Meta } from './Meta'

@Entity()
export class Recipe extends Meta implements IRecipe {
  @PrimaryColumn('uuid')
  id: string

  @Column('text')
  name: string

  @Column('text')
  description: string
}
