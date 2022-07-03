import express from 'express';

const app = express();

const PORT = 6001;

app.get('/', (req, res) => {
  res.send('Welcome to typescript backend!');
});

app.listen(PORT, () => {
  console.log('The application is listening ' + 'on port http://localhost:' + PORT);
});
