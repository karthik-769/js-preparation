console.log("this is promise");

let prom1 = new Promise ((resolve,reject) => {
    let a = Math.random();
    if (a>0.5) {
        console.log("promise 1 done");
        reject("failure");
        
    } else {
        setInterval (() => {
            resolve("sucsess");
            console.log("promise 1 done");
          //console.log("Hello, this message is displayed every 3 seconds.");
          
        }, 3000);
    }  
});

let prom2 = new Promise ((resolve,reject) => {
    let a = Math.random();
    if (a>0.5) {
        console.log("promise 2 done");
        reject("failure 2");
        
    } else {
        setInterval (() => {
          //console.log("Hello, this message is displayed every 3 seconds.");
          resolve("sucsess 2");
          console.log("promise 2 done");
        }, 3000);
    }  
});

//let prom3 = Promise.race([prom1,prom2]);

let prom3 = Promise.all([prom1,prom2]);

//let prom3 = Promise.allSettled([prom1,prom2]);

prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);  
});

// prom.then((al) => {
//     console.log(`this is in then block ${al}`);
// }).catch((err) => {
//     console.log(`this is in catch block ${err}`);
// });
