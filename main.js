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
 *
 * Example:
 * Here is a line of OCR text, representing integers 490067715.
    _  _  _  _  _  _     _
|_||_|| || ||_   |  |  ||_
  | _||_||_||_|  |  |  | _|

It's first frame represents the integer 4:
|_|
  |

It's second frame represents the integer 9:
 _
|_|
 _|

IMPORTANT:
Note that there is leading whitespace in the frame representing the integer 1! 1 takes up a single frame, just like the other integers.
BE MINDFUL OF THIS WHEN 1 IS THE LEADING INTEGER.
 */

/**
 * Data Structures
 * --------------
 *  Let's represent an OCR'd frame in memory using a rectangular array (an array of arrays where each array is the same length).
 *  The parent array contains a child array for each row of OCR'd characters in our frame, from top to bottom.
 *
This frame represents the integer 4:

|_|
  |

We will use consts to represent each individual character. We'll start by having the value of the const be the actual character, for simplicty and to help with debugging. Later if we need to switch to Symbols or integer representations for performance reasons (or whatever), it'll be easy to do so.

Our array representing the above OCR frame will look like this:
[
    [SPACE, SPACE, SPACE],
    [PIPE, UNDERSCORE, PIPE],
    [SPACE, SPACE, PIPE],
]

IMPORTANT:
Note how the *first* row is "above" the number itself. This is because the first row is actually for any underscores which form the "top" of our number. Underscores "in the middle" of the number (like with 4 or 8) are in our second row, and underscores "on the bottom (like with 6 or 8) are in our third row. Hope that makes sense : )
 *
 *
 */

/*
 * Characters used in our OCR representation
 * IMPORTANT: Be sure to always use getters/setters. We don't want to directly compare against the value of the const to make it easier to replace with a Symbol or integer representation later on.
 * NOTE: Move to new file if this file has gotten big/complex.
 */
const SPACE = ' '; // whitespace
const PIPE = '|'; // pipe
const UNDERSCORE = '_'; // underscore

console.log('Sanity check for char consts:'); // TODO delete
[SPACE, PIPE, UNDERSCORE].forEach(c => console.log(c));

/*
 * OCR representation of 0.
 *
 _
| |
|_|

*/
const ZERO = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

console.log('ZERO IS ', JSON.stringify(ZERO));
/*
 * isZero
 * Returns true if the frame represents the integer 0, false if not.
 * @param  {Frame} frame
 *         Frame of OCR data.
 * @return {Boolean}
 *         Returns true if our OCR equals ZERO
 */
function isZero(frame) {
    return JSON.stringify(frame) === JSON.stringify(ZERO)
}

/**
 * TESTS
 * TODO: Once prototyping is done write real unit tests. For now this is fine.
 */

/**
 * isZero()
 */
const frameIsZero = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

const frameNotZero = [
    [SPACE, SPACE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

console.log('isZero identifies positive - expect true', isZero(frameIsZero));
console.log('isZero identifies negative - expect false', isZero(frameNotZero));
