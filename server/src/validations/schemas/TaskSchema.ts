import Joi from './Joi'

export const get = Joi.object({}).unknown(true)

export const patch = Joi.object({
  params: Joi.object({
    id: Joi.objectId().required(),
  }).unknown(true),
  body: Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    status: Joi.boolean(),
  }).required(),
}).unknown(true)

export const post = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.boolean().required(),
  }).required(),
}).unknown(true)

export const del = Joi.object({
  params: Joi.object({
    id: Joi.objectId().required(),
  }).unknown(true),
}).unknown(true)
