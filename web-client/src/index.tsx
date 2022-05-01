import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import reportWebVitals from './reportWebVitals'
import { Chat } from './pages/chat/Chat'
import { SocketProvider } from './modules/SocketProvider'
import { Tasks } from './pages/tasks/Tasks'

const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <SocketProvider>
      <Tasks />
      <hr />
      <Chat />
    </SocketProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
