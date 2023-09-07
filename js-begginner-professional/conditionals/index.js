drinking = true
console.log(drinking)

if (!drinking){
    console.log("GOOD JOB")
}else{
    console.log("drink some now")
}

const age = Number(prompt("how old are you? "))
let message;

if (age < 19){
    message="you are not allowed here!"
    console.log(message)
}else if (age >=19  && age< 21){
    message= "you can come in but you cannot purchase alcohol"
    console.log(message)
}else if (age >=21){
    message= "welcome ! feel free to enjoy alcohol"
    console.log(message)
}

//tenary operator

const id = false
// exprision1 epx2 is done if ex1 is tru and ex3 is done if its  false 
id ? console.log("it's correct") : console.log("its wrong")

//switch cases

let randNum= Math.random()
randNum =Math.floor(randNum * 6)
userChoice = Number(prompt("pick a number between 0,5 "))

switch (userChoice){
    case 0:
        console.log(`the random number was ${randNum}`)
        break
    case 1:
        console.log(`you pick 1 random number was ${randNum}`)  
        break
        
    case 2:
        console.log(`you pick 2 random number was ${randNum}`) 
        break
    case 3 : 
    console.log(`you pick 3 random number was ${randNum}`) 
        break   
    case 4 : 
    console.log(`you pick 4 random number was ${randNum}`) 
        break 
    case 5 : 
    console.log(`you pick 5 random number was ${randNum}`) 
        break 
}

const grade = prompt("what was your grade").toUpperCase()
switch (grade){
    case "F":
    case "E":
        console.log("failed")
        break
    case "D":
    case "C":
        console.log("failed")
        break 
    case "B":
    case "A":
        console.log("passed")
        break   
        
    default:
        console.log("Good job")    
}

//rock paper scissors
let choices=["rock","paper","scissors"]
let score = 0
let randint= Math.random()
let compChoice=Math.floor(randint * 3)
let playerChoice=Number(prompt("pick a number between zero and 3"))

if (compChoice ===  playerChoice  ){
    console.log("it was a tie")
}else if (compChoice === 0 && playerChoice === 1){
    console.log("player wins,computer lost")
}else if(compChoice === 1 && playerChoice ===2){
    console.log("player wins,computer lost")

}else if(compChoice == 2 && playerChoice ===0){
    console.log("computer wins,player lost")

}

let yourName = prompt("what is your name ")
yourName.toLowerCase()

