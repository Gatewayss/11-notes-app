const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const router = require('express').Router(); 

const readDB = fs.readFileSync('db/db.json')
const data = JSON.parse(readDB)

router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 1000000);
    data.push(newNote);
    fs.writeFileSync(('db/db.json'), JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
      } else {
        res.json(notes)
      }
    });
  });

router.get('/notes', (req, res) => {
    fs.readFile(('db/db.json'), 'utf8', (err, data) => {
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