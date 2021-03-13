/**
 * v2.Introduction
 */
import express from 'express'
import { getRepository } from 'typeorm'
import { Introduction } from '../../database/entity/Introduction'

// Introductionの型定義
// import { IIntroduction } from '../types'

// IntroductionのORM
// import { Introduction } from '../models/Introduction'

/** v2.introduction */
const app = express()

// v2.introductions.list
app.get('/', (_, res) => {
  ;(async () => {
    const allIntro = await getRepository(Introduction).find()
    res.send(allIntro)
  })()
})

// v2.introductions.get
app.get('/:id', (req, res) => {
  ;(async () => {
    const id = parseInt(req.params.id, 10)
    const intro = await getRepository(Introduction).find({
      id,
    })
    res.send(intro)
  })()
})

// v2.introductions.create
app.post('/', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

// v2.introductions.update
app.put('/:id', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

// v2.introductions.delete
app.delete('/:id', (_, res) => {
  res.status(501).json({ message: 'to be implemented' })
})

export default app
