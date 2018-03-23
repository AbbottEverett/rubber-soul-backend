const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
// const knex = require('./db');
// const masterRoute = require('./src/routes/master');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const routes = require('./routes');

app.use('/api/shoes', routes.shoes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    console.log(err);
    res.status(status).json({ error: err });
  });
  
  app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Route not found!' }});
  });
  
  function listener() {
    console.log(`Listening on port ${port}...`);
  }
  
  app.listen(port, listener);