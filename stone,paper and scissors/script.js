let userscore = 0;
let computerscore = 0;
let reset = document.getElementById('reset-btn');

const choices = document.querySelectorAll('.choice');

const playgame = (userChoice) => {
    console.log(userChoice);
    const computerChoice = getcomputerchoice();
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        drawgame();
    }
    else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        userscore++;
        console.log("You win this round!");
        userbord(userscore);

    } else {
        computerscore++;
        computerbord(computerscore);

    }

}

const getcomputerchoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randomnumber = Math.floor(Math.random() * 3);
    return options[randomnumber];

}

const userbord = () => {
    document.querySelector('#msg').innerText = "You win!";
    document.querySelector('#user-score').innerText = userscore;
}

const computerbord = () => {
    document.querySelector('#msg').innerText = "Computer wins!";
    document.querySelector('#comp-score').innerText = computerscore;
}


const drawgame = () => {
    document.querySelector('#msg').innerText = "It's a draw!";
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

    });
});


reset.addEventListener('click', () => {
    userscore = 0;
    computerscore = 0;  
    document.querySelector('#user-score').innerText = userscore;
    document.querySelector('#comp-score').innerText = computerscore;
    document.querySelector('#msg').innerText = "Play Your Move";
});
