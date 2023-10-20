const express = require('express');

const app = express()
const port = 3333

// GET method
app.get('/', (req, res) => {
    res.json({ message: "Hallo ini respon JSON wkwkw" });
})

// POST method
app.post('/', (req, res) => {
    res.send('Sebuah POST request')
})

// PUT method
app.put('/user', (req, res) => {
    res.send('/user')
})

// DELETE method
app.delete('/user', (req, res) => {
    res.send('  DELETE request at /user')
})