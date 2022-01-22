import { model, Schema } from 'mongoose'

import { ITask } from '../types/tasks'

const taskSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ITask>('Task', taskSchema)
