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
} = require('../src/frame-comparisons.js');

const DATA_DIR = './data/'
const VALID_DATA_DIR = `${DATA_DIR}valid/`;

/**
 * THIS FUNCTION HAS DESTRUCTIVE SIDE EFFECTS on `entry`.
 *
 * @param {Entry} entry
 * @return {Frame}
 *         Get a frame (3x3 array of characters) from our rows of data
 */
function spliceLeadingFrame(entry) {
    return entry.map(row => row.splice(0,3));
}

const NUM_FRAMES_IN_ENTRY = 9;

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

    // We don't need the blank line for anything, get rid of it.
    entry.pop();

    const frames = [];

    for(let i = 0; i < NUM_FRAMES_IN_ENTRY; i++) {
        const frame = spliceLeadingFrame(entry);
        frames.push(frame);
    }
});

