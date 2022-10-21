import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize'

interface TaskModel
  extends Model<
    InferAttributes<TaskModel>,
    InferCreationAttributes<TaskModel>
  > {
  _id: CreationOptional<string>
  name: string
  description: string
  status: boolean
}

export default ({ sequelize }: { sequelize: Sequelize }) =>
  sequelize.define<TaskModel>(
    'Task',
    {
      _id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      paranoid: true,
    }
  )
