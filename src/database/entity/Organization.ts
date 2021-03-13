import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm'
export enum ActivityType {
  ART = 'art',
  SPORTS = 'sports',
  OTHER = 'other',
}

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ length: 64 })
  name: string
  @Column({
    type: 'enum',
    enum: ActivityType,
    default: ActivityType.OTHER,
  })
  activityType: ActivityType
  @Column({
    default: false,
  })
  isDeleted: boolean
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}

@Entity()
export class OrganizationUser {
  @PrimaryColumn({ length: 128 })
  id: string
  @OneToOne(() => Organization)
  @JoinColumn()
  org: Organization
  @Column({
    default: false,
  })
  isDeleted: boolean
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
