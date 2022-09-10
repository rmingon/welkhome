import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, AutoIncrement, PrimaryKey } from 'sequelize-typescript'

@Table
export class User extends Model {

  @PrimaryKey
  @AutoIncrement
  id: number

  @Column
  name: string

  @Column
  prename: string

  @Column
  get fullName(): string {
    return `${this.getDataValue('name')} ${this.getDataValue('prename')}`
  }

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

}
