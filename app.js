const crypto=require('node:crypto')

const password='SomeSecurePassword';
const salt=crypto.randomBytes(16).toString('hex');  // adding random string that is unique to each user
const iterations=1000000; // It makes the hash slower to compute,  More iterations = better security but But too many = slow login performance
const keylen=64;  // this sets the length (in bytes) of the final derived key (the hashed password) [64 bytes=128 hex characters].
const digest='sha512'; // specifies hash function

crypto.pbkdf2(password,salt,iterations,keylen,digest,(err,derivedKey)=>{
    if(err) throw err;

    const hashedPassword=derivedKey.toString('hex')
    console.log('User Password:',password)
    console.log('Salt:',salt);
    console.log('Hashed Password:', hashedPassword); // this is the hashed password that you can store in your database

   verifyPassword('SomeSecurePassword',hashedPassword,salt)


})

function verifyPassword(inputPassword, hashedPassword, salt) {
  crypto.pbkdf2(inputPassword, salt, 1000000, 64, 'sha512', (err, derivedKey) => {
    if (err) throw err;

    const isMatch = derivedKey.toString('hex') === hashedPassword;
    console.log('Password match:', isMatch);
  });
}
