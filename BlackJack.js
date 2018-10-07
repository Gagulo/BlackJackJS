let colors = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let values = ['Ace', 'King', 'Queenie', 'Jack', 
            'Ten', 'Nine', 'Eight', 'Seven', 
            'Six', 'Five', 'Four', 'Three', 'Two'];
            
let deck = [];

for (let colorsIdx = 0; colorsIdx < colorsIdx.length; colorsIdx++)
{
    for (let valuesIdx = 0; valuesIdx < valuesIdx.length; valuesIdx++)
    {
        deck.push(values[valuesIdx] + ' of ' + colors[colorsIdx]);
    }
}
