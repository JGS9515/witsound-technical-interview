import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { IsString,  Matches, Validate } from 'class-validator';
import { DontStartWithZ } from '../../validator/DontStartWithZ';

@Entity()
export class User extends BaseEntity {
  @Column('text',{nullable:false})
  @IsString()
  @Validate(DontStartWithZ)
  public name!: string;
}
