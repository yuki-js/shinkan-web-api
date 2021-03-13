import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
export enum AuthorityRole {
  GENERAL = 'general',
  REVIEWER = 'reviewer',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryColumn({ length: 128, nullable: false })
  uid: string
  @Column({
    length: 64,
    nullable: false, // 独自で直しました
  })
  name: string
  @Column({
    type: 'enum',
    enum: AuthorityRole,
    default: AuthorityRole.GENERAL,
    nullable: false,
  })
  authority: AuthorityRole
  @Column({
    //bitって何? booleanで良い？
    default: false,
  })
  isDeleted: boolean
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
