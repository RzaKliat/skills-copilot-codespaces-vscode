// create web server
const express = require('express');
const app = express();
const port = 3000;

// get method
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// post method
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

// put method
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

// delete method
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});
