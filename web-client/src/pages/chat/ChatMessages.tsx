import React, { useEffect, useState } from 'react'

import { useSocket } from '../../modules/SocketProvider'

export const ChatMessages: React.FC = () => {
  const [messages, setMessages] = useState(
    [] as { text: string; sender: string }[]
  )
  const [IO] = useSocket()

  useEffect(() => {
    if (!IO) return
    IO.on('chat message', (msg) => setMessages([...messages, msg]))
  }, [IO, messages])

  return (
    <div>
      {messages.map((msg, id) => (
        <div
          key={id}
          style={{
            border: '1px solid lightgrey',
            background: 'rgba(0, 0, 0, .05)',
            padding: '30px',
            margin: '10px',
            position: 'relative',
          }}
        >
          {msg.text}
          <div
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '7px',
            }}
          >
            {msg.sender}
          </div>
        </div>
      ))}
    </div>
  )
}
