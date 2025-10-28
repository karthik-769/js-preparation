// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("data loaded");
//         }, 5000);

//     });
// }


async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await x.json();     
}
 

//seetle mesns resolved or rejected

//resovle mesns fulfilled

//reject means failed

async function main() {

console.log("loading modules....");

console.log("do something else");

console.log("loding data");

let data = await getdata();

console.log(data);

console.log("proccesing data")

console.log("task 2")

}

main();
   

// data.then((V) => {
//     console.log(data);

//     console.log("proccesing data")

//     console.log("task 2")

// })

console.log("task 3")


async function postData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Hello',
        body: 'This is a test post.',
        userId: 1
      })
    });

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();








