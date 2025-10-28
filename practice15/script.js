console.log("Hello, World!");
console.log("This is a JavaScript file.");
console.log("It is linked to an HTML file.");
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

console.log("End of the script.");

const fn = () => {
    console.log("This is a function that can be called later.");
}

const callback = (arg,fn) => {
    console.log(arg);
    fn();
    setInterval(() => {
        console.log("Hello, this message is displayed every 3 seconds.");
    }, 3000);
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("harry",fn);
    document.head.append(sc);
}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", callback);