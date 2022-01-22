import { BaseError } from "./BaseError"

export const handleError = (error: any) => {
  
  if (error instanceof BaseError) {
    if (process.env.NODE_ENV === 'development')
      console.log(error.toJSON(true))

    return error.toJSON()
  } else
    return {
      code: 500,
      message: "oops something went wrong",
    }
}
