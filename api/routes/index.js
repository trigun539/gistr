const GistsAPI = require('./gists-api')

module.exports = (app) => {
  app.use('/gists', GistsAPI)
}
