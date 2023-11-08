const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Return the index .html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});

// Gather notes data for get and post requests
function getNotes() {
    let data = fs.readFileSync('./db/db.json', 'utf8');
    let notes = JSON.parse(data);
    return notes;
};

let notes = getNotes();

// Read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    console.log(notes);
    res.json(notes);
});

//Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved
app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), 'utf8');
    res.json(true);
});

app.listen(3001);