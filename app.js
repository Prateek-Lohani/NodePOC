const {sum , multiply} = require('./calculate')

const data = require('./data.json')
const util= require('node:util')

console.log('app')
console.log(data.map((item)=>item.title))
console.log(util)

sum(5,15)
multiply(5,15)