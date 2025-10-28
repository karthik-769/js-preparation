document.querySelector(".container").innerHTML
//'\n        <div class="box"> I am a box 1 </div>\n        <div class="box"></div>\n    '
document.querySelector(".box").innerText
//'I am a box 1'
document.querySelector(".container").innerText
//'I am a box 1'
document.querySelector(".container").innerHTML
//'\n        <div class="box"> I am a box 1 </div>\n        <div class="box"></div>\n    '
document.querySelector(".box").innerHTML
//' I am a box 1 '
document.querySelector(".box").tagName
//'DIV'
document.querySelector(".box").nodeName
//'DIV'

document.querySelector(".box").innerHTML = "hello all"
//'hello all'

document.querySelector(".box").getAttribute("style")
//'display: flex;'
document.querySelector(".box").hasAttribute("style", "display: inline" )
//true

//document.querySelector(".box").remove("style")
//undefined
document.querySelector(".box").hasAttribute("style")
//false


let div = document.createElement("div");
div.innerHTML = "i am  a  <b> new box </b>";
div.setAttribute("class", "created");
// document.querySelector(".container").append(div);
//document.querySelector(".container").prepend(div);
//document.querySelector(".container").before(div);
document.querySelector(".container").after(div);
//document.querySelector(".container").replaceWith(div);


let cont = document.querySelector(".container");

// insert ajacent html/text/element

cont.insertAdjacentHTML("beforebegin","<b>i a newly inserted string 1</b>");

cont.insertAdjacentHTML("afterBegin","<b>i a newly inserted string 2</b>");

cont.insertAdjacentHTML("beforeEnd","<b>i a newly inserted string 3</b>");

cont.insertAdjacentHTML("afterEnd","<b>i a newly inserted string 4</b>");


document.querySelector(".box").remove()


document.querySelector(".container").classList.add("harry");

document.querySelector(".container").className
//'container red bg-green harry'
document.querySelector(".container").classList.remove("harry");

document.querySelector(".container").className
//'container red bg-green'
document.querySelector(".container").classList.toggle("red")
//false
document.querySelector(".container").classList.toggle("red")
//true
