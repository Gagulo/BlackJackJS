let color = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let value = ['Ace', 'King', 'Queenie', 'Jack', 
            'Ten', 'Nine', 'Eight', 'Seven', 
            'Six', 'Five', 'Four', 'Three', 'Two'];

//Buttons that ve to be provided with an id's but u can use classes as well.
let newGameBtn = document.getElementById('Start-Button');
let hitBtn = document.getElementById('Hit-Button');
let stayBtn = document.getElementById('Stay-Button');

//Text Area
let textArea = document.getElementById('Text-Area');

let gameStart = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

newGame.addEventListener('click', function(){
    gameStart = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [NextCard(), NextCard()];
    playerCards = [NextCard(), NextCard()];
    
    newGameBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
    showStatus();
});

function createDeck(){
    let deck = [];
    for (let colorIdx = 0; colorIdx < colorIdx.length; colorIdx++){
        for (let valueIdx = 0; valueIdx < valueIdx.length; valueIdx++){
            let card = {
                color: color[colorIdx],
                value: value[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck){
    for (let i = 0; i < deck.length; i++){
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function CardString(card){
    return card.value + ' of ' + card.color;
}

function NextCard(){
    return deck.shift();
}

function getScore(cardArray){
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++){
        let card = cardArray[i];
        score += getCardNumericValue(card);
        if (card.value === 'Ace'){
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21){
        return score + 10;
    }
    return score;
}

function updateScores(){
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function showStatus(){
    if(!gameStart){
        textArea.innerText = 'Hello and Welcome to Simple Black Jack game.';
        return;
    }

    let dealerCardString = '';
    for (let i = 0; i < dealerCards.length; i++){
        dealerCardString += CardString(dealerCards[i]) + '\n';
    }

    let playerCardString = '';
    for (let i = 0; i < playerCards.length; i++){
        playerCardString += CardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText = 
    'Dealer has:\n' + 
    dealerCardString + 
    '(score: ' + dealerScore + '\n\n' + 

    'Player has:\n' + 
    playerCardString + 
    '(score: ' + playerScore + '\n\n';

    if (gameOver){
        if (playerWon){
            textArea.innerText += "You Won!";
        }
        else {
            textArea.innerText += "Dealer Won";
        }
        newGameBtn.style.display = 'inline';
        hitBtn.style.display = 'none';
        stayBtn.style.display = 'none';
    }
}

let deck = createDeck();
let playerCards = [NextCard(), NextCard()];