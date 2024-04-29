const { createServer } = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

const path = process.argv[2] || 'database.csv';
const port = 1245;
const hostname = '127.0.0.1';

function homeHandler(req, res) {
  res.statuscode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

function studentsHandler(req, res, path) {
  res.statuscode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students');
  countStudents(path)
    .then((students) => {
      res.write(students);
      res.end();
    })
    .catch((error) => {
      res.write(error.message);
      res.end();
    });
}

const app = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    homeHandler(req, res);
  }
  if (req.method === 'GET' && req.url === '/students') {
    studentsHandler(req, res, path);
  }
});

app.listen(port, hostname);
module.exports = app;
