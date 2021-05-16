// Contains static data structures representing all valid frames

const {
    PIPE,
    SPACE,
    UNDERSCORE
} = require('./ocr-characters.js');

/***
 * Terminology
 * -----------
 *  - "Frame"
 *      - We are scanning 4 lines of OCR text. The text has pipes, *      underscores, and whitespace. These characters are used to represent integers (0 and positive ints).  *
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
```
    _  _  _  _  _  _     _
|_||_|| || ||_   |  |  ||_
  | _||_||_||_|  |  |  | _|
```


It's first frame represents the integer 4:
```
|_|
  |
```

It's second frame represents the integer 9:
```
 _
|_|
 _|
```

Here are the integers 0-9. NOTE THE LEADING WHITESPACE FOR 1:
```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
```

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

/*************** Actual Valid Frame Data *****************/
// IMPORTANT: All visual representations of OCR data start from the
// left edge of the screen - any whitespace IS intentional.

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

/*
 * OCR representation of 1.
 * Note that we only use 2 pipes.
 * IMPORTANT: Note that there are 2 leading WHITESPACE characters.
 * The frame itself *still has the standard width of 3 chars*.
 *
```

  |
  |
```

*/
const ONE = [
    [SPACE, SPACE, SPACE],
    [SPACE, SPACE, PIPE],
    [SPACE, SPACE, PIPE],
];

/*
 * OCR representation of 2.
 *
```
 _
 _|
|_
```
*/
const TWO = [
    [SPACE, UNDERSCORE, SPACE],
    [SPACE, UNDERSCORE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 3.
```
 _
 _|
 _|
```
*/
const THREE = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 4.
 *
```

|_|
  |
```
*/
const FOUR = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 5.
 *
```
 _
|_
 _|
 ```
*/
const FIVE = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 6.
 *
```
 _
|_
|_|
```
*/
const SIX = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 7.
 *
```
 _
  |
  |
```
*/
const SEVEN = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 8.
 *
```
 _
|_|
|_|
```

*/
const EIGHT = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

/*
 * OCR representation of 9.
 *
```
 _
|_|
 _|
```
*/
const NINE = [
    [SPACE, UNDERSCORE, SPACE],
    [PIPE, SPACE, PIPE],
    [PIPE, UNDERSCORE, SPACE],
];

module.exports = {
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
};
