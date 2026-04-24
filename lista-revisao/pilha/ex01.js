let stack = [];
let cards = ['A', 'B', 'C', 'D', 'E'];

// empilhando
for (let card of cards){
    stack.push(card);
}
console.log("Pilha completa: ", stack);
console.log(" ");
// desempilhando
while (stack.length > 0){
    console.log("Retirando carta: ", stack.pop());
}