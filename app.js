require('./xyz')

const sumModule =require('./sum')  

console.log('app');

sumModule.sum(5,10)  // using sum function from the sum module
console.log(sumModule.courseName)