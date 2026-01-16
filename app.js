let choices = document.querySelectorAll(".choice");
let text = document.getElementById("text");
let userscore = 0;
let compscore = 0;
let us = document.getElementById("user-score");
let cs = document.getElementById("comp-score");
let reset = document.querySelector(".reset");
const audioTurn = new Audio('audioTurn.mp3');
let userRes = document.getElementById("imguserchoice");
let compRes = document.getElementById("imgcompchoice");




choices.forEach((choice) => {
    choice.addEventListener('click', function getuserchoice() {
        audioTurn.play();
        choices.forEach((c) => {
            c.style.borderColor = "black";
        });
        let userchoice = choice.getAttribute("id");
        let src="";
        console.log(userchoice + " by user");
        switch(userchoice){
            case "rock":
                src="pngimg.com - fist_PNG15.png";
                userRes.setAttribute('class','show');
                break;
            case "paper":
                src="old-paper-transparent-background-22.png";
                userRes.setAttribute('class','show');
                break;
            case "scissors":
                src="pngwing.com.png";
                userRes.setAttribute('class','show');
                break;
        }
        userRes.setAttribute('src',src);
        let result = compchoice();
        

        checkWin(result, userchoice);
    });
});

function compchoice() {
    let src="";
    let arr = ["rock", "paper", "scissors"];
    let no = Math.floor(Math.random() * 3);
    switch(arr[no]){
        case "rock":
            src="pngimg.com - fist_PNG15.png";
            compRes.setAttribute('class','show');
            break;
        case "paper":
            src="old-paper-transparent-background-22.png";
            compRes.setAttribute('class','show');
            break;
        case "scissors":
            src="pngwing.com.png";
            compRes.setAttribute('class','show');
            break;
    }
    compRes.setAttribute('src',src);
    return arr[no];
}

function checkWin(result, userchoice) {

    if (result === userchoice) {
        console.log("draw");
        text.innerText = "Draw";
    } else if (userchoice === "rock" && result === "scissors") {
                console.log("another console for testing");
        console.log("gyan bhai pharma odisha iitbhu banaras")
        text.innerText = "You Won yay! :)";
        userscore += 1;
        us.innerText = userscore;
    } else if (userchoice === "paper" && result === "rock") {
        text.innerText = "You Won! :)";
        console.log("gyan bhai pharma odisha iitbhu banaras")
        userscore += 1;
        us.innerText = userscore;
    } else if (userchoice === "scissors" && result === "paper") {
        text.innerText = "You Won! :)";
        userscore += 1;
        us.innerText = userscore;
        console.log("gyan bhai pharma odisha iitbhu banaras")
    } else {
        text.innerText = "You lose :(";
        compscore += 1;
        cs.innerText = compscore;

        console.log("gyan bhai pharma odisha iitbhu banaras")
    }
}

reset.addEventListener('click', function() {
    let src = "";
    userRes.setAttribute('src',src);
    compRes.setAttribute('src',src);
    compRes.setAttribute('class','hide');
    userRes.setAttribute('class','hide');

    choices.forEach((c) => {
        c.style.borderColor = "black";
    });
    text.innerText = "";
    userscore = 0;
    compscore = 0;
    us.innerText = "0";
    cs.innerText = "0";
    userRes.setAttribute("src","");
    compRes.setAttribute("src","");
});
