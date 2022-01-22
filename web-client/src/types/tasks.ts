export interface ITask {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

export interface TaskProps {
  task: ITask
}

export type TApiData = {
  message: string
  status: string
  tasks: ITask[]
  task?: ITask
}
