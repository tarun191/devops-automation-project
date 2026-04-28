const express = require('express');
const fs = require('fs');
const app = express();

const logFile = '/var/log/app.log';

// Function to write logs
function writeLog(message) {
    const log = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFile, log);
}

// Routes
app.get('/', (req, res) => {
    writeLog("INFO: Home page accessed");
    res.send("Smart DevOps App Running 🚀");
});

app.get('/login', (req, res) => {
    writeLog("INFO: User login success");
    res.send("Login Successful");
});

app.get('/payment', (req, res) => {
    writeLog("INFO: Payment processed");
    res.send("Payment Done");
});

app.get('/error', (req, res) => {
    writeLog("ERROR: Payment failed");
    res.status(500).send("Error Occurred!");
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});