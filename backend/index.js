import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as uuid from 'uuid';

const PORT = 4242;

const app = express();
app.use(bodyParser.json());

// In memory database :)
let names = [];

// --------------------
// Crud
// --------------------

app.get('/names', function (req, res) {
  res.json(names);
});

app.post('/names', function (req, res) {
  const name = {
    uuid: uuid(),
    name: req.body.name
  };

  if (name.name.toLowerCase() === 'error') {
    // If name is error, simulate a 4xx error.
    setTimeout(() => {
      res.status(401);
      res.json({});
    }, 2000);

  } else {
    names.push(name);

    // Simulate a delay of 2s before sending the response
    setTimeout(() => {
      res.json(name);
    }, 2000);
  }
});

// --------------------
// Start the server
// --------------------

app.listen(PORT, function () {
  console.log(`listening on *:${PORT}`);
});
