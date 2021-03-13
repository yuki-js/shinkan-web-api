import { getConnection } from 'typeorm'
import { AuthorityRole, User } from '../../database/entity/User'

export function roleGuard(role: AuthorityRole): any {
  return (req: any, res: any, next: () => void) => {
    ;(async () => {
      const uid = req.auth.uid

      const user = await getConnection().getRepository(User).findOne({ uid })
      console.log(user)
      if (!user || user.authority !== role) {
        throw new Error()
      }
    })()
      .then(next)
      .catch(() => {
        res.status(403).send('Insufficient role')
      })
  }
}
