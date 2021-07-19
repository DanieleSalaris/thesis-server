const fs = require('fs')

const utility = {
  formatError(e) {
    if (!e) {
      return
    }

    return {
      error: e.name,
      message: e.message
    }
  },

  readFile(path, format='utf8') {
    return new Promise(((resolve, reject) => fs.readFile(path, format, ((err, data) => {
      if (err) {
        return reject(err)
      }

      resolve(data)
    }))))
  },

  async parseJSONFile(path) {
    const fileContent = await utility.readFile(path)
    return JSON.parse(fileContent.toString())
  }
}

module.exports = utility
