const express = require('express');
const cors = require('cors');
const path = require('path');
const http = require('http');

const routes = require('./routes');


const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);