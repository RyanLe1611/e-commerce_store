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
// Retrieve all the customers data in the database
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
// Add a new customer to the database
app.post('/customers', (req, res) => {
    const { id, name, email } = req.body;
    pool.query('INSERT INTO customers (id, name, email) VALUES ($1, $2, $3)', [id, name, email], (err, results) => {
      if (err) {
        console.error('Error inserting data:', error);
        return res.status(500).json({ error: 'Data insertion error' });
      }
      res.status(201).json({ message: 'Customer added successfully' });
    })
})
