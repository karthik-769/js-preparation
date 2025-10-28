let a = [48,43,72,53,69,6]
// let newarray=[]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     // newarray.push(element**2)
//     newarray.push(element)
    
// }

// console.log(newarray)
// console.log(newarray.sort())

let newarray =a.map((e,index,a)=>{
    return e**2;
})

console.log(newarray)


const greterthanseven = (e)=> {
    if(e>7){
        return true
    }
    return false 
}

console.log(a.filter(greterthanseven))



