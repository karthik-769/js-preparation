let num = 5;
let factorial = 1;
for (let index = num; index > 0; index--) {
    factorial = factorial*(index)
    
    
}

let nums = [1,2,3,4,5]

let factorials = nums.reduce((acc,cur)=> acc*cur ,1)


console.log(factorial)
console.log(factorials)