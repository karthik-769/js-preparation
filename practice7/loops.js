let a = [1,2,3,5,5,6]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
a.forEach((value,index, arr)=> {
    console.log(index,value, arr)
})

let obj ={
    a:1,
    b:2,
    c:3
}


for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    
    const element = obj[key];
    console.log(key,element);

}

for (const element of a) {
    console.log(element)  
}