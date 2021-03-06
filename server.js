const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);


app.get('/', (request, response) => {
  response.status(200).json({hello: 'World'});
});


// Your new routes below here ------------->






// ---------------------------------------->


app.listen(app.get('port'), () => {
  console.log(`Plants server running on http://localhost:${app.get('port')}`);
});

module.exports = app;