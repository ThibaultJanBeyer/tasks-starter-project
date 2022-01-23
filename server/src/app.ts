import config from 'config'

import server from './server'
import { setupDb } from './db'

export const app = async () => {
  const PORT = config.get('host.port')
  await setupDb()

  return server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  )
}

app()
