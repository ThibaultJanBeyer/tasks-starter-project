import Joi from 'joi'

import * as TaskSchema from './schemas/TaskSchema'
import { ValidationError } from '../exceptions/TypedErrors'

const createValidator = (schema: Joi.Schema) => async (values: any) => {
  try {
    return await schema.validateAsync(values)
  } catch (err) {
    throw new ValidationError("Error trying to validate request", err, values)
  }
}

export const taskRequestValidations = {
  del: createValidator(TaskSchema.del),
  get: createValidator(TaskSchema.get),
  patch: createValidator(TaskSchema.patch),
  post: createValidator(TaskSchema.post),
}
