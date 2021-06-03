fs = require('fs');

const {
    VALID_ENTRY_DATA_PATH,
} = require('../paths.js');

const {
    chunkEntryIntoFrames,
} = require('./entry-handler.js');

// Helper method. Nicely display a frame.
function displayFrame(frame){
    frame.forEach(row => console.log(row));
    console.log(''); // empty line
}

fs.readFile(`${VALID_ENTRY_DATA_PATH}`, 'utf8', (error, data) => {
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
