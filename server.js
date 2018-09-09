const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);


app.get('/', (request, response) => {
  response.status(200).json({hello: 'World'});
});


app.listen(app.get('port'), () => {
  console.log(`Plants server running on http://localhost:${app.get('port')}`);
});