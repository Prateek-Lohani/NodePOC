# Commit: 0013b79

## Title: Verifying password (advised to use bcrypt in production level apps)

## Description
This commit demonstrates how to verify a password against a stored hashed password using PBKDF2.

## Concept Learned
- Password verification
- Comparing hashed passwords
- Security best practices (recommends bcrypt for production)

## Code Example
```
javascript
function verifyPassword(inputPassword, hashedPassword, salt) {
  crypto.pbkdf2(inputPassword, salt, 1000000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;
    const isMatch = derivedKey.toString('hex') === hashedPassword;
    console.log('Password match:', isMatch);
  });
}
```

## Key Takeaway
Always verify passwords using the same hashing algorithm with stored salt. For production apps, use bcrypt instead of PBKDF2.
