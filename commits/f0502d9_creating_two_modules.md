# Commit: f0502d9

## Title: Creating two modules and requirement of one module into main module

## Description
This is the foundational commit that introduces the basic concept of creating modules in Node.js.

## Concept Learned
- Creating a simple module
- Using require() to load a module
- module.exports basics

## Code Example
```
javascript
// myModule.js
module.exports = function() {
    return 'Hello from module';
};

// main.js
const myModule = require('./myModule');
console.log(myModule());
```

## Key Takeaway
Every JavaScript file in Node.js is a module. Use module.exports to define what gets exported and require() to import it elsewhere.
