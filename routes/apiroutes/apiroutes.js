const fs = require('fs');
const notes = require('../../db/db.json');
const path = require('path');
const router = require('express').Router();
const express = require('express');
const app = express();

app.post("/", (req, res) => {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 1000000);
    notes.push(newNote);
    fs.writeFileSync('../../db/db.json', JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        res.status(200).send('Note added successfully');
        res.json(notes)
      }
    })
  })

  
router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        const notes = JSON.parse(data);
        res.json(notes);
      }
    });
  });

  module.exports = router;