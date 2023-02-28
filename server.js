const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/db.json')

app.use(express.static('public'))

app.get('/api/notes', (req, res) => {
    res.send(db)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })