const additem = async (item) => {
    await randomdelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
}

const randomdelay = () => {
    return new Promise ((resolve, reject)=>{
        timeout = 1 +6*Math.random();
        setTimeout(() => {
           resolve(); 
        }, timeout*1000);

    })
}



main = async () => {

    let t = setInterval(() => {
         let last = document.body.getElementsByTagName('div');
         last = last[last.length -1];
         if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length -3);                
         }else{
            last.innerHTML = last.innerHTML + ".";
         }

    },700); 


    let text = [
    "intializing Hacking",
    "instilazing virus",
    "pasword files detected",
    "reading your files",
    "sending all personal files and data to Server",
    "cleing up",]


    for (const item of text) {
        await additem(item);    
    }    

    await randomdelay();
    clearInterval(t);

    let last = document.body.getElementsByTagName('div');
    last = last[last.length -1];
    last.innerHTML = "Hacking complete! All your data has been sent to the hacker server. Pay 1000$ to xyz account to get your data back.";     




}   

main(); 