const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line).map((line) => line.split(','));
        const fields = {};

        students.forEach(([firstName, , , field]) => {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        console.log(`Number of students: ${students.length}`);
        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;