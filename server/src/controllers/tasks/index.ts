import { TaskModel } from '../../db'
import { DatabaseError } from '../../exceptions/TypedErrors'
import { ITask } from '../../types/tasks'

export const find = async (): Promise<ITask[]> => {
  try {
    return await TaskModel.findAll()
  } catch (error) {
    throw new DatabaseError('Error trying to find tasks', error)
  }
}

export const save = async (
  body: Pick<ITask, 'name' | 'description' | 'status'>
): Promise<ITask> => {
  try {
    const task = TaskModel.build({
      name: body.name,
      description: body.description,
      status: body.status,
    })

    return await task.save()
  } catch (error) {
    throw new DatabaseError('Error trying to save tasks', error, { body })
  }
}

export const update = async (
  id: string,
  body: Partial<Pick<ITask, 'name' | 'description' | 'status'>>
): Promise<ITask> => {
  try {
    const Task = await TaskModel.findByPk(id)
    if (!Task) throw new Error(`Task not found`)
    console.log(Task)
    return await Task.update(body)
  } catch (error) {
    throw new DatabaseError('Error trying to update task', error, { id, body })
  }
}

export const remove = async (id: string): Promise<ITask | null> => {
  try {
    const Task = await TaskModel.findByPk(id)
    await Task?.destroy()
    return Task
  } catch (error) {
    throw new DatabaseError('Error trying to delete task', error, { id })
  }
}
