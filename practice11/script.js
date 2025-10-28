// function getRandomColor() {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//   return randomColor;
// }


// to get an any random no between any tow no then we use formula of a+r(b-a)  where r is random no ,a intial no , b is the final no 

function getRandomColor(){
    val1 = Math.ceil(0+Math.random()*255); 
    val2 = Math.ceil(0+Math.random()*255); 
    val3 = Math.ceil(0+Math.random()*255);

    return `rgb(${val1},${val2},${val3})`;
}


document.querySelectorAll(".box").forEach( (e)=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})

