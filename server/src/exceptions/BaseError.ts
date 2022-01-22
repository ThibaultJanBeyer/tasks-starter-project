interface Props {
  code: number
  error?: any
  extras?: any
  message: string
  name: string
}

export class BaseError extends Error {
  __error: any
  code: number
  extras: any

  constructor({ name, message, code, error, extras }: Props) {
    super(error)
    this.__error = error
    this.code = code
    this.extras = extras
    this.message = message
    this.name = name
    this.stack += error.stack ? `\n <- ${error.stack}` : ''
  }

  toJSON(notRedacted = false) {
    return {
      code: this.code,
      message: this.message,
      base_message: this.__error.message,
      ...(notRedacted
        ? {
            __error: this.__error,
            extras: this.extras,
            name: this.name,
            stack: this.stack,
          }
        : {}),
    }
  }
}
