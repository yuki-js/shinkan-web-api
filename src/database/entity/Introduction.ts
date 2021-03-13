import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm'
@Entity()
export class Introduction {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ length: 64 })
  title: string
  @Column({ length: 255 })
  website: string

  @OneToMany(() => IntroductionImage, image => image.introduction)
  images: IntroductionImage[]
  @Column({ length: 255 })
  twitter: string //Twitterスクリーンネーム（＠なし）
  @Column({ length: 255 })
  instagram: string
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
export class IntroductionImage {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ length: 255 })
  imagePath: string
  @ManyToOne(() => Introduction, intro => intro.images)
  introduction: Introduction
  @Column({
    default: false,
  })
  isDeleted: boolean
  @CreateDateColumn()
  createdAt: Date
  @UpdateDateColumn()
  updatedAt: Date
}
