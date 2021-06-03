fs = require('fs');

const {
    isZero,
    isOne,
    isTwo,
    isThree,
    isFour,
    isFive,
    isSix,
    isSeven,
    isEight,
    isNine,
} = require('./frame-comparisons.js');

const {
    chunkEntryIntoFrames,
} = require('./entry-handler.js');

const DATA_DIR = './data/'
const VALID_DATA_DIR = `${DATA_DIR}valid/`;

// Helper method. Nicely display a frame.
function displayFrame(frame){
    frame.forEach(row => console.log(row));
    console.log(''); // empty line
}

fs.readFile(`${VALID_DATA_DIR}single-entry.txt`, 'utf8', (error, data) => {
    if(error) {
        return console.log('Error reading file: ', error);
    }

    // Create an array for each line of text
    // and convert each line of text into an array of characters.
    const entry = data
        .split('\n')
        .map(row => Array.from(row));

    // Get rid of EOF newline
    entry.pop();

    const frames = chunkEntryIntoFrames(entry);

    frames.forEach(displayFrame);
});
