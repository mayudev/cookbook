import { BaseEntity, Column } from 'typeorm'

export class Meta extends BaseEntity {
  @Column('timestamp', {
    nullable: false,
  })
  createdAt: number

  @Column('timestamp', {
    nullable: false,
  })
  updatedAt: number
}
