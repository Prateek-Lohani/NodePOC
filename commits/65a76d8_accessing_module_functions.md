# Commit: 65a76d8

## Title: Accessing variables/functions of a module into different module

## Description
This commit demonstrates how to share functions from one module to another using module.exports.

## Concept Learned
- module.exports
- require() function
- Function sharing between files

## Code Example
```
javascript
// greet.js
module.exports = function(name) {
    return 'Hello, ' + name;
};

// main.js
const greet = require('./greet');
console.log(greet('World'));
```

## Key Takeaway
Use module.exports to export functions from a module and require() to import them in other files.
