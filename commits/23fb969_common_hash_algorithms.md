# Commit: 23fb969

## Title: Common Hash Algorithms(md5,sha1,sha256,sha512)

## Description
This commit explores different hash algorithms available in Node.js crypto module.

## Concept Learned
- MD5 (128-bit, fast but insecure)
- SHA-1 (160-bit, deprecated)
- SHA-256 (256-bit, secure)
- SHA-512 (512-bit, most secure)

## Code Example
```
javascript
const crypto = require('node:crypto');

// Different hash algorithms
const algorithms = ['md5', 'sha1', 'sha256', 'sha512'];

algorithms.forEach(algo => {
    const hash = crypto.createHash(algo).update('data').digest('hex');
    console.log(`${algo}: ${hash}`);
});
```

## Key Takeaway
Never use MD5 or SHA-1 for security purposes. Use SHA-256 or SHA-512 for cryptographic hashing.
