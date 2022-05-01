// import React from 'react'
import React, { useState, useEffect } from 'react'
import { io, Socket } from 'socket.io-client'

import { baseSocketUrl } from '../constants'

const SocketStore = React.createContext(undefined as any)
type calcContext = [Socket, any]
export const useSocket = () => React.useContext<calcContext>(SocketStore)

export const SocketProvider: React.FC<React.PropsWithChildren<any>> = ({
  children,
}) => {
  const [socketIO, setSocketIO] = useState(null as any)

  useEffect(() => {
    const IO = io(baseSocketUrl)
    setSocketIO(IO)

    // CLEAN UP THE EFFECT
    return () => {
      IO.disconnect()
      setSocketIO(null)
    }
  }, [])

  return (
    <SocketStore.Provider value={[socketIO as Socket]}>
      {children}
    </SocketStore.Provider>
  )
}
