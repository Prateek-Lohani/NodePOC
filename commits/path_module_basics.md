# Path Module

## Title: Path Module Basics

## Description
This commit demonstrates the use of Node.js built-in `path` module for working with file and directory paths.

## Concept Learned
- Using Node.js path module
- path.basename() - returns the last portion of a path
- Working with file extensions
- Cross-platform path handling

## Code Example
```
javascript
const path = require('path')

// path.basename() - returns the last portion of the path
console.log(path.basename('c:/user/vscode/index.js'))  // returns 'index.js'

// Second parameter removes the extension
console.log(path.basename('c:/user/vscode/index.js', '.js'))  // returns 'index'

// Other useful path methods:
console.log(path.dirname('c:/user/vscode/index.js'))  // returns 'c:/user/vscode'
console.log(path.extname('c:/user/vscode/index.js'))  // returns '.js'
console.log(path.join('c:', 'user', 'vscode', 'index.js'))  // returns 'c:\user\vscode\index.js'
```

## Key Takeaways
1. Use forward slashes `/` or backslashes `\\` (not double slashes)
2. The extension parameter must include the dot: `'.js'` not `'js'`
3. path module automatically handles cross-platform path separators
4. path.join() is useful for creating paths in a cross-platform way

## Common Issues
- **Double slashes** `//` don't work - use single `/` or `\\`
- **Missing dot** in extension - use `'.js'` not `'js'`
- **Wrong command** - use `node app.js` not `npm app.js`
