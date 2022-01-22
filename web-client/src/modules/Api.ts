import { ITask, TApiData } from '../types/tasks'

const baseUrl = 'http://localhost:8080/api/v1'

export const get = async (): Promise<TApiData> => {
  try {
    const response = await fetch(`${baseUrl}/tasks`)
    return await response.json()
  } catch (err: any) {
    throw new Error(err)
  }
}

export const add = async (task: ITask): Promise<TApiData> => {
  try {
    const item: Omit<ITask, '_id'> = {
      name: task.name,
      description: task.description,
      status: false,
    }
    const response = await fetch(`${baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(item),
    })
    return response.json()
  } catch (err: any) {
    throw new Error(err)
  }
}

export const toggle = async (id: string): Promise<TApiData> => {
  try {
    const task = await (await get()).tasks.find((item) => item._id === id)
    if (!task) throw new Error(`Task does not exist (id: ${id})`)
    const response = await fetch(`${baseUrl}/tasks/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({ status: !task.status }),
    })
    return response.json()
  } catch (err: any) {
    throw new Error(err)
  }
}

export const del = async (id: string): Promise<TApiData> => {
  try {
    const response = await fetch(`${baseUrl}/tasks/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json;charset=UTF-8' },
    })
    return response.json()
  } catch (err: any) {
    throw new Error(err)
  }
}
