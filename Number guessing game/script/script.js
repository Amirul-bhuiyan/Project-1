// ============== DOM Elements ===============
// Close DOM element of help
let helplink = document.querySelector(".helplink")
let close = document.querySelector(".close")
let help_container = document.querySelector(".help_container")
let numberinputarea = document.querySelector (".numberinputarea")

// DOM element of input area
let numberinput = document.querySelector(".numberinput")
let submitbutton = document.querySelector(".submitbutton")
let inputValue

// DOM for reveal button
let reveal = document.querySelector(".reveal")

// DOM for progress bar
let progressbar = document.querySelector(".progressbar")

// Player 1 DOM AREA
let player1container = document.querySelector(".player1container")
let playername1 = document.querySelector(".playername1")
let taskcount1Display = document.querySelector(".taskcount1Display")
let player1input = document.querySelector(".player1input")
let guessbutton1 = document.querySelector(".guessbutton1")

// Player 2 DOM AREA
let player2container = document.querySelector(".player2container")
let playername2 = document.querySelector(".playername2")
let taskcount2Display = document.querySelector(".taskcount2Display")
let player2input = document.querySelector(".player2input")
let guessbutton2 = document.querySelector(".guessbutton2")

// Error and winner display
let winner = document.querySelector(".winner")
let taskcount1 = 0
let taskcount2 = 0
let maxtry = 3
// ===============Reset Game
let resetgame = ()=>{
    taskcount1 = 0
    taskcount2 = 0
    taskcount1Display.innerHTML = taskcount1
    taskcount2Display.innerHTML = taskcount2
    winner.innerHTML = ""
    player1container.style.display = "none"
    player2container.style.display = "none"
    player1input.value = ""
    player2input.value = ""
    progressbar.style.width = "0px";
    numberinputarea.style.display = 'block'
}
// ===============winning condition
let checkWinner = () => {
    if (taskcount1 >= maxtry && taskcount2 >= maxtry) {
        winner.innerHTML = "W I N N E R Refaree";
        player1container.style.display = "none";
        player2container.style.display = "none";
        setTimeout (resetgame,2000)
    }
}
// ================= Event Listeners =================
// Help container toggle
helplink.addEventListener("click", () => {
    help_container.style.display = "block"
})
close.addEventListener("click", () => {
    help_container.style.display = "none"
})

// Submit button functionality for input value
submitbutton.addEventListener("click", () => {
    inputValue = Number(numberinput.value)
    if (numberinput.value === "") {
        alert("Enter a number between 1-100")
    } else if (inputValue < 1) {
        alert("Enter a number above 0 and below 101")
    } else if (inputValue > 100) {
        alert("Maximum limit is 100")
    } else {
        numberinput.value = "";
        let width = (inputValue / 100) * 500
        progressbar.style.width = width + "px"
        player1container.style.display = "block"
        player2container.style.display = "none"
        numberinputarea.style.display = 'none'
    }
});
// Reveal button functionality==========
reveal.addEventListener("click",()=>{
    reveal.innerHTML = inputValue
    if(reveal.innerHTML = inputValue){
        
    }
})
// Player 1 Guess functionality
guessbutton1.addEventListener("click", () => {
    let value1 = Number(player1input.value)

    if (player1input.value === "") {
        alert("Enter a number between 1-100")
    } else if (value1 < 1) {
        alert("Enter a number above 0")
    } else if (value1 > 100) {
        alert("Enter a number below 101")
    } else {
        if (value1 === inputValue) {
            player1container.style.display = "none"
            winner.innerHTML = "W I N N E R Player-1"
            setTimeout (resetgame,2000)
        } else {
            taskcount1++;
            taskcount1Display.innerHTML = taskcount1
            player1input.value = ""

            if (taskcount1 >= 3) {
                alert("Player 1 has used all attempts")
                player1container.style.display = "none"
                player2container.style.display = "block"
        }
    }
    checkWinner ()
    }
})
// Player 2 Guess functionality
guessbutton2.addEventListener("click", () => {
    let value2 = Number(player2input.value)

    if (player2input.value === "") {
        alert("Enter a number between 1-100")
    } else if (value2 < 1) {
        alert("Enter a number above 0")
    } else if (value2 > 100) {
        alert("Enter a number below 101")
    } else {
        if (value2 === inputValue) {
            player2container.style.display = "none"
            winner.innerHTML = "W I N N E R Player-2"
            setTimeout (resetgame,2000)
        } else {
            taskcount2++;
            taskcount2Display.innerHTML = taskcount2
            player2input.value = ""

            if (taskcount2 >= 3) {
                alert("Player 1 has used all attempts")
                player2container.style.display = "none"
                player1container.style.display = "block"
        } 
    }
    checkWinner()
    }
})