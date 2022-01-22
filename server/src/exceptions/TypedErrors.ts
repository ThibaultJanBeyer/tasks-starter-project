import { BaseError } from './BaseError'

export class ValidationError extends BaseError {
  constructor(message: string, error?: any, extras?: any) {
    super({ name: 'VALIDATION_ERROR', code: 400, message, error, extras })
  }
}

export class DatabaseError extends BaseError {
  constructor(message: string, error?: any, extras?: any) {
    super({ name: 'DATABASE_ERROR', code: 500, message, error, extras })
  }
}

export class UpstreamError extends BaseError {
  constructor(message: string, error?: any, extras?: any) {
    super({ name: 'UPSTREAM_ERROR', code: 500, message, error, extras })
  }
}
