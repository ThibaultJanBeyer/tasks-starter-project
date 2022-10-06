import React, { useState } from 'react'

import { ITask } from '../../types/tasks'

type Props = {
  saveTask: (e: React.FormEvent, formData: ITask | any) => void
}

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [formData, setFormData] = useState<ITask | any>()

  const handleForm = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form
      onSubmit={(e) => saveTask(e, formData)}
      style={{
        border: '1px solid lightgrey',
        padding: '30px',
        margin: '10px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridGap: '10px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '100px 1fr',
            alignItems: 'center',
            gridGap: '10px',
          }}
        >
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '100px 1fr',
            alignItems: 'center',
            gridGap: '10px',
          }}
        >
          <label htmlFor="description">Description</label>
          <textarea onChange={(e) => handleForm(e)} id="description" />
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <button disabled={formData === undefined}>Add Task</button>
      </div>
    </form>
  )
}
