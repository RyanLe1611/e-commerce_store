const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres', // Your PostgreSQL username
  host: 'localhost', // Server host, typically localhost
  database: 'Ecommerce_Store', // Your database name
  password: 'Leviet2004@', // Your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;

