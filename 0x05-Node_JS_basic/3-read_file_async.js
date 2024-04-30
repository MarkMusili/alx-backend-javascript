const fs = require('fs');

async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const lines = data.split('\n');
          console.log(`Number of students: ${lines.length - 1}`);

          const fields = {};

          for (let i = 1; i < lines.length; i++) {
              const [firstName, , , field] = lines[i].split(',');
              if (!fields[field]) {
                  fields[field] = [];
              }
              fields[field].push(firstName);
          }

          for (const field in fields) {
            if (field) {
              const studentCount = fields[field].length;
              const studentList = fields[field].join(', ');
              console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
            }
          }

          resolve();
        }
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
