const constants = {
  httpStatusCode: {
    successful: {
      OK: 200,
      CREATED: 201,
      ACCEPTED: 202,
    },

    clientError: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      FORBIDDEN: 403,
      REQUEST_TIMEOUT: 408,
      UNPROCESSABLE_ENTITY: 422
    },

    serverError: {
      INTERNAL_SERVER_ERROR: 500,
    }
  }
}

module.exports = constants
