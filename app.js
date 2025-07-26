const {sum , multiply} = require('./calculate')

const data = require('./data.json')

console.log('app')
console.log(data.map((item)=>item.title))


sum(5,15)
multiply(5,15)