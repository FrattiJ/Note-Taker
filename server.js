const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));

// Return the index .html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});

// Read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
});

//Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved
app.post('/api/notes', (req, res) => {
});

app.listen(3001);