const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.status(200).json({'hello': 'world'});
});

app.get('/friend', (req, res) => {
  //   res.send('Hello World!')
  res.status(200).json({'hello':'friend'});
});

// app.get('/all', (req, res) => {
//   //   res.send('Hello World!')
//   res.status(200).json({'hello':'all'});
// });

module.exports = app;

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });