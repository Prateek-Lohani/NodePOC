# Commit: 0a55e01

## Title: Hashing using Crypto Module

## Description
This commit introduces basic hashing functionality using Node.js built-in crypto module.

## Concept Learned
- Using Node.js crypto module
- Creating hash digests
- Basic password hashing

## Code Example
```
javascript
const crypto = require('node:crypto');

const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log('Hash:', hash);
```

## Key Takeaway
Node.js has a built-in crypto module for cryptographic operations without external dependencies.
