console.log("hello world")

document.body.childNodes[1].firstElementChild.style.backgroundColor = "red"

let con = document.body.firstElementChild;


con.lastElementChild.style.backgroundColor = "green";


con.parentElement;   

con.lastElementChild.style.color ="red";

// document.childElementnodes;
// document.childNodes[1];
// con.childNodes;

con.children;//gives html elements

con.children[2].style.color = "blue";

con.children[2].nextElementSibling.style.backgroundColor = "brown";

con.children[2].previousElementSibling.style.backgroundColor = "yellow";

document.body.children
//HTMLCollection(4) [div.container, table, script, script]

document.body.children[1]
//<table>​…​</table>​

document.body.children[1].rows
//HTMLCollection(2) [tr, tr]

