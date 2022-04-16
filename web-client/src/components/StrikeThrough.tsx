import React from 'react'

export const StrikeThrough: React.FC<
  React.PropsWithChildren<{ strike: boolean }>
> = ({ strike, children }) => (strike ? <s>{children}</s> : <>{children}</>)
