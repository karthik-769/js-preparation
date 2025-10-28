function createCard(title, channelname, views, time, duraion, imageUrl) {
    let viewstr;
    if (views >= 1000000) {
        viewstr = (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        viewstr = (views / 1000).toFixed(1) + 'K';
    } else {
        viewstr = views.toString();
    }



    let html = `<div class="card">
            <div class="image">
                <img src="${imageUrl}" alt="Image">
                <div class="capsule">${duraion}</div>
            </div>
            <div class="content">
                <h2>${title}</h2>
                <span info>${channelname} . ${viewstr} veiws . ${time} monthsago </span>
             </div>   
        </div> `


    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}

createCard("installing vs code & How website works | Sigma web development course  Toutorial #1", "codewithharry", 727000, 2, "31:45", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");

createCard("Learn HTML in 20 Minutes | HTML Tutorial for Beginners", "codewithharry", 1523000, 4, "20:10", "https://i.ytimg.com/vi/pQN-pnXPaVg/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5o8Y8bXw-1u6jX3xW7pJkKJ9n5A");  

createCard("CSS Tutorial for Beginners | Learn CSS in 20 Minutes", "codewithharry", 980000, 3, "20:05", "https://i.ytimg.com/vi/1Rs2ND1ryYc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5YJH8u4rfi2X9Z6bX6Z8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8b");


createCard("JavaScript Tutorial for Beginners | Learn JavaScript in 30 Minutes", "codewithharry", 1256000, 5, "30:00", "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5YJH8u4rfi2X9Z6bX6Z8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8b");

createCard("Learn Bootstrap in 20 Minutes | Bootstrap Tutorial for Beginners", "codewithharry", 430000, 6, "20:15", "https://i.ytimg.com/vi/Qw8mHh6Z4KY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5YJH8u4rfi2X9Z6bX6Z8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8bX8b");



