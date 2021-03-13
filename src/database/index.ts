import { createConnection } from 'typeorm'
import { User as UserEntity } from './entity/User'
export async function connect(): Promise<void> {
  await createConnection()
  console.log('connected to database! ')
}
