const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres', // Your PostgreSQL username
  host: 'localhost', // Server host, typically localhost
  database: 'Ecommerce_Store', // Your database name
  password: 'Leviet2004@', // Your PostgreSQL password
  port: 5432, // Default PostgreSQL port
});

// Test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release(); // Release the client back to the pool
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to PostgreSQL:', result.rows);
  });
});

module.exports = pool;

