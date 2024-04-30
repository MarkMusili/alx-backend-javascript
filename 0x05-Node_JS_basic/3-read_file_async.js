const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(path)) {
            fs.readFile(path, 'utf-8', (err, data) => {
                if (err) {
                    reject(new Error('Cannot load the database'));
                } else {
                    const lines = data.split('\n').filter(line => line.trim() !== '');
                    console.log(`Number of students: ${lines.length}`);

                    const fields = {};

                    lines.slice(1).forEach(line => {
                        const [firstName, , , field] = line.split(',');
                        if (!fields[field]) {
                            fields[field] = [];
                        }
                        fields[field].push(firstName);
                    });

                    for (const field in fields) {
                        const studentCount = fields[field].length;
                        const studentList = fields[field].join(', ');
                        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
                    }

                    resolve();
                }
            });
        } else {
            reject(new Error('Cannot load the database'));
        }
    });
}

module.exports = countStudents;
