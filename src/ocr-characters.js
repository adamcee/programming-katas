/*
 * Characters used in our OCR representation.
 * We want to use data structures and/or getters/setters to abstract away the actual charactes used in the OCR data.
 *
 */
const PIPE = '|'; // pipe
const SPACE = ' '; // whitespace
const UNDERSCORE = '_'; // underscore

console.log('Sanity check for char consts:'); // TODO delete
[SPACE, PIPE, UNDERSCORE].forEach(c => console.log(c));

module.exports = {
    PIPE,
    SPACE,
    UNDERSCORE,
};
