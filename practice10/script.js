console.log("harry")

let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("redbox").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green"

// document.querySelectorAll(".box").style.backgroundCOlor = "yellow"  this will give error 


// document.querySelectorAll(".box").forEach( (e)=>{
//     console.log(e)
// })

// document.querySelectorAll(".box").forEach( (e)=>{
//     e.style.backgroundColor = "green";
// })


console.log(document.getElementsByTagName("div"));

let e = document.getElementsByTagName("div")

console.log(e[4].matches("#redbox"));

console.log(e[4].closest(".container"))

console.log(e[4].closest("html"))
