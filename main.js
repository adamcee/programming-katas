console.log('hello world'); // TODO - delete

/***
 * Terminology
 * -----------
 *  - "Frame"
 *      - We are scanning 4 lines of OCR text. The text has pipes,
 *      underscores, and whitespace. These characters are used to represent integers (0 and positive ints).
 *
 *      - Each line of OCR text has a "height" of 3 chars.
 *
 *      - Any int can be represented by an OCR "frame" of width 3 chars and height 3 chars. Each line of OCR text is composed of frames, one single frame per potential integer representation (a misspelled OCR number is not a valid integer but still fits within a frame - thus, "potential integer representation").
 *
 *      - We will represent the OCR'd frame in memory with a data structure (probably arrays). **This will also be called a frame**.
 *
 *      - Thus, the term "frame" can be used both to refer to the raw OCR data and it's representation in memory.
 */

/*
 * Characters used in our OCR representation
 * NOTE: Move to new file if this file has gotten big/complex.
 */
const SPACE = ' '; // whitespace
const PIPE = '|'; // pipe
const UNDERSCORE = '_'; // underscore

console.log('Sanity check for char consts:'); // TODO delete
[SPACE, PIPE, UNDERSCORE].forEach(c => console.log(c));

/**
 * Functions to check if an OCR'd frame is some given integer
 */
function isZero(frame) {
}
