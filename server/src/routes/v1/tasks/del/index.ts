import { Response, Request } from "express"

import * as tasksController from "../../../../controllers/tasks"
import { handleError } from "../../../../exceptions/handleError"
import { taskRequestValidations } from "../../../../validations"

export const del = async (req: Request, res: Response): Promise<void> => {
  try {
    await taskRequestValidations.del(req)

    const task = await tasksController.remove(req.params.id)
    const tasks = await tasksController.find()
    res.status(200).json({
      message: "Task deleted",
      task,
      tasks,
    })
  } catch (err) {
    const { code, ...friendlyError } = handleError(err)
    res.status(code).json({ error: friendlyError })
  }
}
