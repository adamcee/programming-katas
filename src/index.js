fs = require('fs');

console.log('hello world'); // TODO - delete

// Read in a single entry
const DATA_DIR = './data/'
const VALID_DATA_DIR = `${DATA_DIR}valid/`;
fs.readFile(`${VALID_DATA_DIR}single-entry.txt`, 'utf8', (error, data) => {
    if(error) {
        return console.log('Error reading file: ', error);
    }

    console.log(data);
});

