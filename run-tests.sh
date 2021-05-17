#!/bin/sh

# Simple script to run all the test files. Doing it this way for speed & simplicity while prototyping.
# This file MUST be in the project root so paths will be correct when called via npm.

# Add each test file here like so:
# node my-test.test.js
node ./test/frame-comparisons.test.js
