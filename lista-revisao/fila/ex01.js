import Fila from "../fila/fila.js";

let fila = new Fila();

// colocando nomes na fila
fila.enqueue("Pedro");
fila.enqueue("Maria");
fila.enqueue("Bruno");

// o tempo da fila vai receber um math.random de tempo, e na saída vai mostrar a fila completa e o tempo de brincadeira das crianças
while (!fila.isEmpty()){
    let tempo = Math.floor(Math.random() * 3000) + 1000;
    console.log(`Brincando: ${fila.dequeue()} por ${tempo}ms`);
}