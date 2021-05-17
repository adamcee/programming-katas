fs = require('fs');

console.log('hello world'); // TODO - delete

const DATA_DIR = './data/'
const VALID_DATA_DIR = `${DATA_DIR}valid/`;

fs.readFile(`${VALID_DATA_DIR}single-entry.txt`, 'utf8', (error, data) => {
    if(error) {
        return console.log('Error reading file: ', error);
    }

    console.log(data);

    /**
     *
     * Convert string to multidimensional array.
     * This is the raw data for our frames.
     * Ordered top to bottom, each array represents a line of OCR data from the file.
     * Each element in each "row" is a single character
     */
    const rawOCRRows = data
        // Create an array for each line of text
        .split('\n')
        // Convert each line of text into an array of characters
        .map(row => Array.from(row));

    console.log(rawOCRRows);

    // Break rawOCR data into "lines" - a "line" is composed of 3 rows.
    const lines = [];

    // NOTE: This is destructive
    function getLine(entry) {
        return entry.splice(0,3);
    }

    // Check for last line of entry, which is always just whitespace.
    function isEmptyLine(line) {
        return (entry.join('').trim().length === 0);
    }



    // Test getting a single line
    lines.push(getLine(rawOCRRows));
    console.log('lines');
    console.log(lines);

    // TODO: Put all these piece together and read a whole entry and properly convert/parse it.
});

