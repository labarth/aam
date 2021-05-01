import path from 'path';
import express from 'express';

const app = express();
const port = 5000;
const __dirname = path.resolve();

app.use(express.static(path.resolve(__dirname, '../', 'build')));

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));
