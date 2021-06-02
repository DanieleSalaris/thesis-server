
const utility = {
  formatError(e) {
    if (!e) {
      return
    }

    return {
      error: e.name,
      message: e.message
    }
  }
}

module.exports = utility
