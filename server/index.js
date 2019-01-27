const express = require('express');

const app = express();
app.use(express.static('dist'));
app.get('/api/test', (req, res) => res.send({ test: 'This is a test' }));
app.listen(8080, () => console.log('Listening on port 8080!'));
