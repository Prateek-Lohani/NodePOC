const crypto=require('node:crypto')
const data='This will be encrypted by crypto'

const md5=crypto.createHash('md5').update(data).digest('hex') // not recommended as cryptographically weak
console.log('MD5:',md5)

const sha1=crypto.createHash('sha1').update(data).digest('hex') // not recommended as cryptographically weak
console.log('SHA1:',sha1)

const sha256=crypto.createHash('sha256').update(data).digest('hex') 
console.log('SHA256:',sha256)

const sha512=crypto.createHash('sha512').update(data).digest('hex') 
console.log('SHA512:',sha512)