const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/user/:id', function (req, res) {
  const q = req.params;

  //   const q = req.query;
  //   console.log(q);

  res.json(q.id);
});

app.get('/cat', function (req, res) {
  res.send('Hello World');
});

app.get('/sound/:name', function (req, res) {
  const { name } = req.params;

  if (name == 'dog') {
    res.json({ sound: '멍' });
  } else if (name == 'cat') {
    res.json({ sound: '냥' });
  } else if (name == 'pig') {
    res.json({ sound: '꿀' });
  } else if (name == 'cow') {
    res.json({ sound: '모' });
  }

  console.log(name);
  res.send('hi');
});

app.listen(3000);
