// A very hacky test runner.
// Run all .test.js files in the test/ directory
const fs = require('fs')
const exec = require('child_process').exec


const TEST_DIR = './test/' // add your scripts to folder named scripts

const files = fs.readdirSync(TEST_DIR) // reading files from folders

console.log('Test files: ' + files);
files.forEach((file) => {
    const path = `${TEST_DIR}${file}`;
    const shellCommand = `node ${path}`;

    // Totally copied from https://stackabuse.com/executing-shell-commands-with-node-js/
    exec(`${shellCommand}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`Test runner error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`Test runner stderr: ${stderr}`);
            return;
        }

        // Print test file output
        console.log(`${stdout}`);
    });
})
