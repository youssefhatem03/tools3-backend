const Pool = require('pg').Pool;
const bcrypt = require('bcryptjs');
const pool = new Pool({
  user: 'postgres', // Matches the Role name
  host: 'postgresql', // Matches the Service name
  database: 'postgres', // Matches the Database name
  password: '12345678', // Matches the password
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
