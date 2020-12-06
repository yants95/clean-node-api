import { apiKeyAuthSchema } from './schemas/api-key-auth-schema'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components/'

export default {
  securitySchemes: {
    apiKeyAuth: apiKeyAuthSchema
  },
  badRequest,
  unauthorized,
  serverError,
  notFound,
  forbidden
}
