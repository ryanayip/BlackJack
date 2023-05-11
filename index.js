let allCards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let outcome = document.getElementById("result");
let message = "";
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");


function renderGame() {
    
    //cardsEl.innerText = "Cards: " + allCards[0] + ", " + allCards[1];
    //cardsEl.innerText = "Cards: " + allCards;
    //added forLoop
    cardsEl.innerText = "Cards: "

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


