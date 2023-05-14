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
    let aceCount = 0;
    sum = 0;
    let cardsHTML = "";
    for (let i = 0; i < allCards.length; i++) {
        let cardValue = allCards[i];
        if (cardValue > 11) {
            cardValue = 10;
        }
        if (cardValue === 11) {
            aceCount++;
            cardValue = 1;
        }
        sum += cardValue;
        cardsHTML += "<img class='cardimage' src='./sources/cards/" + cardValue + "_of_" + getSuit(i) + ".png'>";
    }
    // Handle ace cards
    while (aceCount > 0 && sum + 10 <= 21) {
        sum += 10;
        aceCount--;
    }
    sumEl.innerText = "Sum: " + sum;

    // Win or Lose logic
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

    // Display cards
    cardArea.innerHTML = cardsHTML;
}

function getSuit(index) {
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    return suits[index % 4];
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
        cardArea.innerHTML = "";
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        allCards = [firstCard, secondCard]
        if (firstCard > 11) {
            firstCard = 10
        }

        if (secondCard > 11) {
            secondCard = 10
        }

        sum = firstCard + secondCard

        // Remove all card images before starting new game
        let cardImages = document.querySelectorAll(".cardimage");
        for (let i = 0; i < cardImages.length; i++) {
            cardImages[i].remove();
        }

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



// function randomSuit() {
//     let randomSuit = Math.floor(Math.random() * 4) + 1;
//     return randomSuit
// }