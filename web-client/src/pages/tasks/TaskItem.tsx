import React from 'react'

import { TaskProps } from '../../types/tasks'
import { StrikeThrough } from '../../components/StrikeThrough'

type Callback = (_id: string, complete?: boolean) => void
type Props = TaskProps & {
  updateTask: Callback
  deleteTask: Callback
}

export const TaskItem: React.FC<Props> = ({
  task: { _id, status, name, description },
  updateTask,
  deleteTask,
}) => (
  <div
    style={{
      border: '1px solid lightgrey',
      display: 'inline-block',
      padding: '10px 30px',
      margin: '10px',
      ...(status ? { backgroundColor: 'rgba(0,0,0,0.1)', opacity: 0.8 } : {}),
    }}
  >
    <h2>
      <input
        type="checkbox"
        checked={status}
        onChange={(event) => updateTask(_id, event.target.checked)}
      />
      <StrikeThrough strike={status}>{name}</StrikeThrough>
    </h2>
    <p>
      <StrikeThrough strike={status}>{description}</StrikeThrough>
    </p>
    <button onClick={() => deleteTask(_id)}>Delete</button>
  </div>
)
