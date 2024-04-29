const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
      const lines = data.split('\n');

      console.log(`Number of students: ${lines.length}`);

      const fields = {};
      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const field in fields) {
        if (field) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    }
  });
}

module.exports = countStudents();
