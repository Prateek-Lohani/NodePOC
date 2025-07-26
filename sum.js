function sum(a,b){
    let result=a+b;
    console.log(result)
}

module.exports=sum // Since modules protects their variables and functions from being accessed directly, we need to export them to make them accessible from outside the module by the hep of module.exports