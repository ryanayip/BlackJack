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

//card adder!
//creating the card element first
const newCardPic = document.createElement("img");
newCardPic.setAttribute("class","cardimage")
//adding attributes to the card
newCardPic.src = "/sources/cards/3_of_clubs.png";
//adding card to HTML
cardArea.appendChild(newCardPic);



//player object
let player = {
    name: "Your Chips",
    chips: 1000
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;



function renderGame() {
    
    //cardsEl.innerText = "Cards: " + allCards[0] + ", " + allCards[1];
    //cardsEl.innerText = "Cards: " + allCards;
    //added forLoop
    cardsEl.innerText = "Cards: "
    //Need to tie card images to random numbers to generate pics insteads numbers
    for (let i = 0; i < allCards.length; i++) {
        cardsEl.textContent += allCards[i] + " "
    }
    
    sumEl.innerText = "Sum: " + sum;
    if (sum < 21) {
        //outcome.innerText = "Do you want to draw a new card?";
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        //outcome.innerText = "Hooray! Blackjack!";
        hasBlackJack = true;
        isAlive = false;
        message = "Hooray! Blackjack!";
    } else {
        //outcome.innerText = "You lose";
        isAlive = false;
        message = "You lose";
    }
    outcome.innerText = message;
   
}

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
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        allCards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame();
    } 
}

function getRandomCard() {
    return Math.floor(Math.random() * 11 + 1);

}


