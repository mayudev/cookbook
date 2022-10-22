import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IMeta } from 'types'

export class Meta extends BaseEntity implements IMeta {
  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
