import React, { useEffect, useState } from 'react'

import * as taskApi from '../../modules/Api'
import { AddTask } from './AddTask'
import { ITask } from '../../types/tasks'
import { TaskItem } from './TaskItem'

interface HandleTaskProps {
  action: keyof typeof taskApi
  data?: ITask | Pick<ITask, '_id'> | any
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const handleTasks = async ({ action, data, setTasks }: HandleTaskProps) => {
  try {
    const { tasks } = await taskApi[action](data)
    setTasks(tasks)
  } catch (err) {
    console.log(err)
  }
}

export const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    handleTasks({ action: 'get', setTasks })
  }, [setTasks])

  return (
    <main className="App">
      <h1 style={{ textAlign: 'center' }}>My Tasks</h1>
      <AddTask
        saveTask={(event: React.FormEvent, item: ITask) => {
          event.preventDefault()
          handleTasks({ action: 'add', data: item, setTasks })
        }}
      />
      {tasks.map((task: ITask) => (
        <TaskItem
          key={task._id}
          updateTask={(id) =>
            handleTasks({ action: 'toggle', data: id, setTasks })
          }
          deleteTask={(id) =>
            handleTasks({ action: 'del', data: id, setTasks })
          }
          task={task}
        />
      ))}
    </main>
  )
}
