import Task from '../../models/tasks'
import { DatabaseError } from '../../exceptions/TypedErrors'
import { ITask } from '../../types/tasks'

export const find = async (): Promise<ITask[]> => {
  try {
    return await Task.find()
  } catch (error) {
    throw new DatabaseError('Error trying to find tasks', error)
  }
}

export const save = async (
  body: Pick<ITask, 'name' | 'description' | 'status'>
): Promise<ITask> => {
  try {
    const task: ITask = new Task({
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
  body: Pick<ITask, 'name' | 'description' | 'status'>
): Promise<ITask | null> => {
  try {
    return await Task.findByIdAndUpdate(
      { _id: id },
      body,
      { new: true } // Since v4, it returns the old object by default instead of the updated one
    )
  } catch (error) {
    throw new DatabaseError('Error trying to update task', error, { id, body })
  }
}

export const remove = async (id: string): Promise<ITask | null> => {
  try {
    return await Task.findByIdAndRemove(id)
  } catch (error) {
    throw new DatabaseError('Error trying to delete task', error, { id })
  }
}
