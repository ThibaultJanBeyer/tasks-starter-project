import React from 'react'

import { ChatForm } from './ChatForm'
import { ChatMessages } from './ChatMessages'

export const Chat: React.FC = () => (
  <main className="Chat">
    <h1 style={{ textAlign: 'center' }}>Chat</h1>
    <ChatForm />
    <ChatMessages />
  </main>
)
