let allCards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let outcome = document.getElementById("result");
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
const cardArea = document.getElementById("card-area");
//card image tie ins
//let twoClubs = document.getElementById("cardImageId");
//twoClubs.src = "/sources/cards/2_of_clubs.png";




//player object
let player = {
    name: "Your Chips",
    chips: 1000
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;



//Working render game function, but always keeps the Ace at 11
function renderGame() {

    
    
    //cardsEl.innerText = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
       // cardsEl.textContent += allCards[i] + " "

        let cardvalue = allCards[i];
        //to include face cards when the value 
        if (cardvalue > 11) {
            cardvalue = getFaceCard();
        }

        if (cardvalue === 11) {
            if (sum + 11 <= 21) {
                cardvalue = 11;
            } else {
                cardvalue = 1;
            }
        }    

        //value of newly added card
        let newestCard = parseInt(allCards[allCards.length - 1]);

        if (cardvalue === 11) {
            if (sum + 11 > 21) {
                cardvalue = 1;
            }
        }
        

        if (allCards.length > 2) {
            //only display the newest card in the array one single time
            let newCardPic = document.createElement("img");
            newCardPic.src = "/sources/cards/" + newestCard + "_of_" + randomSuit() + ".png";
            newCardPic.setAttribute("class","cardimage")
            cardArea.appendChild(newCardPic);
            sumEl.innerText = "Sum: " + sum;
            if (sum < 21) {
                message = "Do you want to draw a new card?";
            } else if (sum === 21) {
                hasBlackJack = true;
                isAlive = false;
                message = "Hooray! Blackjack!";
            } else {
                isAlive = false;
                message = "You lose";
            }
            outcome.innerText = message;
            return
            

   
        } else {
            let newCardPic = document.createElement("img");
            newCardPic.src = "/sources/cards/" + cardvalue + "_of_" + randomSuit() + ".png";
            newCardPic.setAttribute("class","cardimage")
            cardArea.appendChild(newCardPic);
            sumEl.innerText = "Sum: " + sum;
            if (sum < 21) {
                message = "Do you want to draw a new card?";
            } else if (sum === 21) {
                hasBlackJack = true;
                isAlive = false;
                message = "Hooray! Blackjack!";
            } else {
                isAlive = false;
                message = "You lose";
            }
            outcome.innerText = message;
            


    //Win or Lose logic
    sumEl.innerText = "Sum: " + sum;
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        isAlive = false;
        message = "Hooray! Blackjack!";
    } else {
        isAlive = false;
        message = "You lose";
    }
    outcome.innerText = message;
   
} } }

function newCard() {
    if (isAlive === true) {
        let drawCard = getRandomCard();
        sum += drawCard;
        allCards.push(drawCard);
        renderGame();
    } 
}



function startGame() {
    if (isAlive === false) {
        isAlive = true;
        cardArea.innerHTML = "";
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        let displayCards = [firstCard, secondCard]
        allCards = [firstCard, secondCard]
        if (firstCard > 11) {
            firstCard = 10
        }

        if (secondCard > 11) {
            secondCard = 10
        }

        sum = firstCard + secondCard
        renderGame();
    } 
}

    


function getRandomCard() {


    let randomNumber = Math.floor(Math.random() * 10) + 2;
    return randomNumber
}

//return a random number between 12-14 to assign a face card instead of always a "10"
function getFaceCard() {
    let randomNumber = Math.floor(Math.random() * 3) + 12;
    return randomNumber
}



function randomSuit() {
    let randomSuit = Math.floor(Math.random() * 4) + 1;
    return randomSuit
}