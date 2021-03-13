import { getRepository } from 'typeorm'
import { RequestHandler } from 'express'
import { OrganizationUser } from '../../database/entity/Organization'
export const orgSelector: RequestHandler = (req, res, next) => {
  ;(async () => {
    if (!req.auth) {
      throw new Error('no auih')
    }
    const { uid } = req.auth
    const orgUser = await getRepository(OrganizationUser).findOne(uid)
    if (!orgUser) {
      throw new Error('no user')
    }
    req.auth.org = orgUser.org
  })()
    .then(() => next())
    .catch(e => {
      console.log(e)

      res.status(403).send('Invalid org')
    })
}
