import { Response, Request } from "express"

import * as tasksController from "../../../../controllers/tasks"
import { handleError } from "../../../../exceptions/handleError"
import { taskRequestValidations } from "../../../../validations"

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    await taskRequestValidations.get(req)

    const tasks = await tasksController.find()
    res.status(200).json({ tasks })
  } catch (err) {
    const { code, ...friendlyError } = handleError(err)
    res.status(code).json({ error: friendlyError })
  }
}
