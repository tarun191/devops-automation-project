const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Smart DevOps App Running 🚀");
});

app.get('/login', (req, res) => {
    res.send("Login Successful");
});

app.get('/payment', (req, res) => {
    res.send("Payment Done");
});

app.get('/error', (req, res) => {
    res.status(500).send("Error Occurred!");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});