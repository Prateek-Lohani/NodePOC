# Commit: 7513101

## Title: Nested Modules

## Description
This commit introduces the concept of nested modules - organizing code in subdirectories.

## Concept Learned
- Creating subdirectories for modules
- Importing nested modules
- Directory-based module organization

## Code Example
```
javascript
// In calculate/subtract.js
module.exports = function(a, b) {
    return a - b;
};

// Main file
const calc = require('./calculate');
```

## Key Takeaway
Organize related modules into subdirectories for better code structure and maintainability.
