export const StrikeThrough: React.FC<{ strike: boolean }> = ({
  strike,
  children,
}) => (strike ? <s>{children}</s> : <>{children}</>)
