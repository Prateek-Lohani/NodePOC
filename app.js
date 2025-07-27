const crypto=require('node:crypto')

const hash = crypto.createHash('sha256') // creating Hash
hash.update('Hello') // update the hash with data
const digest=hash.digest('hex'); // calculate the digest/transformed data

console.log('SHA-256 Hash:', digest);