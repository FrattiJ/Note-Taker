const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3001);

// Return the index .html file
app.get('/', (req, res) => {
});

// Return the notes.html file
app.get('/notes', (req, res) => {
});

// Read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
});

//Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved
app.post('/api/notes', (req, res) => {
});