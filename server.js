<<<<<<< HEAD
const pool = require('./db')
=======
>>>>>>> origin/main
const express = require('express');
const app = express();
const PORT = 3000;

<<<<<<< HEAD
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
});
// Get all customers 
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
// Get a customer by id
app.get('/customers/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM customers WHERE id = $1', [id], (err, results) => {
      if (err) {
        console.error('Error running query', err.stack);
        res.status(500).json({ error: 'Database query failed' });
      } else {
        res.json(results.rows[0]);
      }
    });
});
// Add a new customer
app.post('/customers', (req, res) => {
    const { id, name, email } = req.body;
    pool.query('INSERT INTO customers (id, name, email) VALUES ($1, $2, $3)', [id, name, email], (err, results) => {
      if (err) {
        console.error('Error inserting data:', error);
        return res.status(500).json({ error: 'Data insertion error' });
      }
      res.status(201).json({ message: 'Customer added successfully' });
    });
});
// Update a customer by id
app.put('/customers/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    pool.query('UPDATE customers SET name = $1, email = $2 WHERE id = $3', [name, email, id], (err, results) => {
      if (err) {
        console.error('Error updating data:', err);
        return res.status(500).json({ error: 'Data updating error' });
      }
      res.json({ message: 'Customer updated successfully '});
    });
});

// Get all products

app.get('/products', (req, res) => {
    pool.query('SELECT * FROM products', (err, results) => {
      if (err) {
        console.error('Error seleting data:', err);
        return res.status(500).json({ error: 'Data selecting error'});
      }
      res.json(results.rows);
    })
})

// Get a product by id

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM products WHERE id = $1', [id], (err, results) => {
      if (err) {
        console.error('Error selecting data', err);
        res.status(500).json({error: 'Data selecting error'});
      }
      res.json(results.rows[0]);
    });
});

// Add a new product

app.post('/products', (req, res) => {
    const { id, name, price } = req.body;
    pool.query('INSERT INTO products VALUES ($1, $2, $3)', [id, name, price], (err, results) => {
      if (err) {
        res.status(500).json({error: 'Data inserting error'});
      }
      res.json({message: 'product added successfully'});
    });
});

// Update product by id

app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const { name, price } = req.body;
    pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3', [name, price , id], (err, results) => {
      if (err) {
        send.status(500).json({error: 'Data updating error'});
      };
      res.json('product updated successfully');
    })
=======
app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
>>>>>>> origin/main
})