# Commit: 7c46761

## Title: Another cleaner way to deal with nested modules

## Description
This commit shows a cleaner approach to organizing and exporting nested modules using index.js files.

## Concept Learned
- Module index files
- Centralized exports
- Clean module organization

## Code Example
```
javascript
// calculate/index.js
module.exports = {
    multiply: require('./multiply'),
    sum: require('./sum')
};
```

## Key Takeaway
Use index.js files in subdirectories to create clean entry points for module groups.
