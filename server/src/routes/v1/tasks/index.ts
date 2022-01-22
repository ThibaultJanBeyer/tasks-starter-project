import { Router } from 'express'

import { del } from './del'
import { get } from './get'
import { patch } from './patch'
import { post } from './post'

export default () => {
  const router: Router = Router()

  router.get('/', get)
  router.post('/', post)
  router.patch('/:id', patch)
  router.delete('/:id', del)

  return router
}
