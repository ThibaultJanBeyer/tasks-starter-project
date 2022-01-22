import { Router } from 'express'

import v1 from './v1'

export default () => {
  const router: Router = Router()

  router.use('/api/v1', v1())
  router.get('/ping', (req, res) => res.status(200).send('pong'))

  return router
}
