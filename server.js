const express = require('express');
const port = 3000;
const db = require('./db/db.json')
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const data = JSON.parse(fs.readFileSync('./db/db.json'))

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 1000000); 
    data.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(data), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Server Error');
        } else {
          res.status(200).send('Note added successfully');
        }
    })
 })

app.use(express.static('public'))

app.get('/api/notes', (req, res) => {
    res.send(db)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })