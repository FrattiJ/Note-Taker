const path = require('path');
const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Return the index .html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Return the notes.html file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/notes.html'));
});

// Gather notes data for get and post requests
var notesData = getNotes();

function getNotes() {
    let data = fs.readFileSync('./db/db.json', 'utf8');

    let notes = JSON.parse(data);

    // Give each note an ID that matches its index (this gets run for every time the page is refreshed)
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = '' + i;
    }

    return notes;
}

// Read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.json(fs.readFile('db/db.json', (err, data) => { //none of this works, find a better way
        if (err) throw err;
        const db = JSON.parse(data);
    }))
});

//Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved
app.post('/api/notes', (req, res) => {
    req.body
});

app.listen(3001);