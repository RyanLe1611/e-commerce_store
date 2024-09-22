const pool = require('./db')
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
})

app.get('/customers', (req, res) => {
    pool.query('SELECT * FROM customers', (err, result) => {
        if (err) {
          console.error('Error running query', err.stack);
          res.status(500).json({ error: 'Database query failed' });
        } else {
          res.json(result.rows); // Send the customers' data as a JSON response
        }
    });
});
