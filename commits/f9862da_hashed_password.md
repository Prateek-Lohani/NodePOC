# Commit: f9862da

## Title: How to create a hashed password to securely save it in database

## Description
This commit demonstrates how to create a secure hashed password using PBKDF2 with salt.

## Concept Learned
- Secure password hashing
- Using salt for unique hashes
- PBKDF2 key derivation

## Code Example
```
javascript
const crypto = require('node:crypto');
const password = 'SomeSecurePassword';
const salt = crypto.randomBytes(16).toString('hex');
const iterations = 1000000;
const keylen = 64;
const digest = 'sha512';

crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, derivedKey) => {
    if (err) throw err;
    const hashedPassword = derivedKey.toString('hex');
    console.log('Hashed Password:', hashedPassword);
});
```

## Key Takeaway
Always use a random salt and high iteration count when hashing passwords. Store both the salt and hash in your database.
