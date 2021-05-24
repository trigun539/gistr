const { Pool } = require('pg')

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'gistsdb',
  password: 'secretpassword',
  port: 5432
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
