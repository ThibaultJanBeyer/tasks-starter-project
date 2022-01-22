import { Response, Request } from 'express'

import * as tasksController from '../../../../controllers/tasks'
import { ITask } from '../../../../types/tasks'
import { handleError } from '../../../../exceptions/handleError'
import { taskRequestValidations } from '../../../../validations'

export const post = async (req: Request, res: Response): Promise<void> => {
  try {
    await taskRequestValidations.post(req)

    const task: ITask = await tasksController.save(req.body)
    const tasks: ITask[] = await tasksController.find()

    res.status(201).json({ message: 'Task added', task, tasks })
  } catch (err) {
    const { code, ...friendlyError } = handleError(err)
    res.status(code).json({ error: friendlyError })
  }
}
