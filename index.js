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


//Random card generator with image
function addRandomCard() {
    //create a variable that will generate a random number between 1-13
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    //create a variable that will generate a random suit
    let randomSuit = Math.floor(Math.random() * 4) + 1;
    //create a variable that will store the image url
    let cardImage = "/sources/cards/" + randomNumber + "_of_" + randomSuit + ".png";
    //create a variable that will create an image element
    const newCardPic = document.createElement("img");
    //add a class to the image element
    newCardPic.setAttribute("class","cardimage")
    //add the image url to the image element
    newCardPic.src = cardImage;
    //add the image element to the cardArea
    cardArea.appendChild(newCardPic);
}


//player object
let player = {
    name: "Your Chips",
    chips: 1000
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;




function renderGame() {

    
    
    //cardsEl.innerText = "Cards: "
    for (let i = 0; i < allCards.length; i++) {
       // cardsEl.textContent += allCards[i] + " "

        let cardvalue = allCards[i];
        //to include face cards when the value is 10
        if (cardvalue == 10) {
            cardvalue = getFaceCard();
        }

        //value of newly added card
        let newestCard = parseInt(allCards[allCards.length - 1]);

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
            
        

        // This logic below works, but incorrectly displays the newest card too many times
        // if (allCards.length > 2) {
        //     let newCardPic = document.createElement("img");
        //     newCardPic.src = "/sources/cards/" + newestCard + "_of_" + randomSuit() + ".png";
        //     newCardPic.setAttribute("class","cardimage")
        //     cardArea.appendChild(newCardPic);
        // } else {
        //     let newCardPic = document.createElement("img");
        //     newCardPic.src = "/sources/cards/" + cardvalue + "_of_" + randomSuit() + ".png";
        //     newCardPic.setAttribute("class","cardimage")
        //     cardArea.appendChild(newCardPic);
        
    }

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
   
} }


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
        if (firstCard > 10) {
            firstCard = 10
        }

        if (secondCard > 10) {
            secondCard = 10
        }

        sum = firstCard + secondCard
        renderGame();
        //addRandomCard();

    } 
}

    


function getRandomCard() {

    //return a random number between 1-10

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber
    // if (randomNumber === 1) {
    //     return 11 }
    // else if (randomNumber > 10) {
    //         return 10
    // } else {
    //     return randomNumber
    // }
}

//return a random number between 10-13 to assign a face card instead of always a "10"
function getFaceCard() {
    let randomNumber = Math.floor(Math.random() * 4) + 10;
    return randomNumber
}

function randomSuit() {
    let randomSuit = Math.floor(Math.random() * 4) + 1;
    return randomSuit

}