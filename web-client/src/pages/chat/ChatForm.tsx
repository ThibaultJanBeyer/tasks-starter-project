import React, { useState } from 'react'

import { useSocket } from '../../modules/SocketProvider'

export const ChatForm: React.FC = () => {
  const [message, setMessage] = useState('')
  const [IO] = useSocket()

  const handleSubmit = () => {
    if (!IO) return
    IO.emit('chat message', message)
    setMessage('')
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
      style={{
        border: '1px solid lightgrey',
        padding: '30px',
        margin: '10px',
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
          gap: '10px',
        }}
      >
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  )
}
