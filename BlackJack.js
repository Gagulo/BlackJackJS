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

function CardString(card){
    return card.value + ' of ' + card.color;
}

function showStatus(){
    if(!gameStart){
        textArea.innerText = 'Hello and Welcome to Simple Black Jack game.';
        return;
    }
}

function NextCard(){
    return deck.shift();
}

let deck = createDeck();
let playerCards = [NextCard(), NextCard()];