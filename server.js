const express = require('express');
const port = 3000;
const db = require('./db/db.json')
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
    fs.appendFile('./db/db.json', JSON.stringify(newNote), (err) => {
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