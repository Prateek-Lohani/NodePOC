# Commit: 138d7f0

## Title: Accessing multiple variables/functions from a module to another module

## Description
This commit shows how to export and access multiple functions from a single module.

## Concept Learned
- Multiple exports
- Destructuring imports
- Module interface design

## Code Example
```
javascript
// math.js
module.exports = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; },
    multiply: function(a, b) { return a * b; }
};

// Main file
const { add, subtract, multiply } = require('./math');
```

## Key Takeaway
Export multiple functions as an object to create a clean module interface.
