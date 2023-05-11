let firstCard = getRandomCard();
let secondCard = getRandomCard();
let allCards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
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
        message = "Hooray! Blackjack!";
    } else {
        //outcome.innerText = "You lose";
        isAlive = false;
        message = "You lose";
    }
    outcome.innerText = message;
   
}

function newCard() {
    let drawCard = getRandomCard();
    sum += drawCard;
    allCards.push(drawCard);
    renderGame();
}

function startGame() {
    renderGame();
}

function getRandomCard() {
    return Math.floor(Math.random() * 11 + 1);

}


