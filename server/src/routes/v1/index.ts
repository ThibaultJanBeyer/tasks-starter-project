import { Router } from "express"

import tasks from "./tasks"

export default () => {
  const router: Router = Router()

  router.use("/tasks", tasks())
  
  return router
}
