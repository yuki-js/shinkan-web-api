/**
 * v2.User
 */
import express from 'express'
import { getRepository } from 'typeorm'
import { AuthorityRole, User } from '../../database/entity/User'
import { roleGuard } from '../middlewares/roleGuard'

// Userの型定義
// import { IUser } from '../types'

// UserのORM
// import { User } from '../models/User'

/** v2.user */
const app = express()

// v2.users.list
app.get('/', roleGuard(AuthorityRole.ADMIN), (_: any, res: any) => {
  res.status(501).json({ message: 'to be implemented' })
})
// v2.users.get
app.get('/:id', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

// v2.users.create
app.post('/', (req, res) => {
  ;(async () => {
    let user = new User()
    user.uid = 'a'
    user.name = 'a'
    user.authority = AuthorityRole.ADMIN
    user = await getRepository(User).save(user)
    res.send(user)
  })()
})

// v2.users.update
app.put('/:id', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

// v2.users.delete
app.delete('/:id', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

export default app
