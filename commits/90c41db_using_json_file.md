# Commit: 90c41db

## Title: Using JSON file

## Description
This commit demonstrates how to read and write JSON files in Node.js.

## Concept Learned
- Reading JSON files with require()
- Writing JSON files with fs module
- JSON.parse() and JSON.stringify()

## Code Example
```
javascript
const fs = require('node:fs');

// Reading JSON
const data = require('./data.json');

// Writing JSON
fs.writeFileSync('output.json', JSON.stringify(newData, null, 2));
```

## Key Takeaway
Node.js can easily read JSON files using require() and write them using the fs module.
