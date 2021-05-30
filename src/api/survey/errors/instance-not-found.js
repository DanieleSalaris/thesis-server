class InstanceNotFound extends Error {
  constructor() {
    super('instance not found');
    this.name = 'InstanceNotFound'
  }
}

module.exports = InstanceNotFound
