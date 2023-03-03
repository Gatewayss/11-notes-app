// const data = require('./db/db.json');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apiroutes = require('./routes/apiroutes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes/htmlroutes.js');

app.use(express.json())
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', htmlroutes);
app.use('/api', apiroutes);

app.listen(port, () => {
  console.log(`Example app listening on port 3000`)
})

