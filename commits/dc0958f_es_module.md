# Commit: dc0958f

## Title: Using ES Module in place of the default commonJS module

## Description
This commit demonstrates how to use ES Modules (import/export) instead of CommonJS (require/module.exports).

## Concept Learned
- ES Modules syntax (import/export)
- .mjs file extension
- Differences between CommonJS and ES Modules

## Code Example
```
javascript
// math.mjs (ES Module)
export function add(a, b) {
    return a + b;
}

// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

## Key Takeaway
Node.js supports both CommonJS and ES Modules. Use .mjs extension or set "type": "module" in package.json for ES Modules.
