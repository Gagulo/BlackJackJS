let color = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let value = ['Ace', 'King', 'Queenie', 'Jack', 
            'Ten', 'Nine', 'Eight', 'Seven', 
            'Six', 'Five', 'Four', 'Three', 'Two'];

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

function NextCard(){
    return deck.shift();
}

let deck = createDeck();
let playerCards = [NextCard(), NextCard()];