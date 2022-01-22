import { Response, Request } from 'express'

import * as tasksController from '../../../../controllers/tasks'
import { handleError } from '../../../../exceptions/handleError'
import { taskRequestValidations } from '../../../../validations'

export const patch = async (req: Request, res: Response): Promise<void> => {
  try {
    await taskRequestValidations.patch(req)

    const {
      params: { id },
      body,
    } = req
    const task = await tasksController.update(id, body)
    const tasks = await tasksController.find()
    res.status(200).json({
      message: 'Task updated',
      task,
      tasks,
    })
  } catch (err) {
    const { code, ...friendlyError } = handleError(err)
    res.status(code).json({ error: friendlyError })
  }
}
