let colors = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let values = ['Ace', 'King', 'Queenie', 'Jack', 
            'Ten', 'Nine', 'Eight', 'Seven', 
            'Six', 'Five', 'Four', 'Three', 'Two'];

function createDeck(){
    let deck = [];
    for (let colorsIdx = 0; colorsIdx < colorsIdx.length; colorsIdx++){
        for (let valuesIdx = 0; valuesIdx < valuesIdx.length; valuesIdx++){
            deck.push(values[valuesIdx] + ' of ' + colors[colorsIdx]);
        }
    }
    return deck;
}

function NextCard(){
    return deck.shift();
}

let deck = createDeck();
let playerCards = [NextCard(), NextCard()];