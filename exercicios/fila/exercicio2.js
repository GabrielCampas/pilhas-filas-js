import Documentos from "./filaexercicio2.js";

const impressora = new Documentos();

// adicionando os documentos e suas páginas
impressora.enqueue("Trabalho de Estrutura de Dados", 10);
impressora.enqueue("Projeto Interdisciplinar", 30);
impressora.enqueue("Conta de luz", 1);
impressora.enqueue("Conta de água", 1);
impressora.enqueue("Contrato", 3);
impressora.enqueue("Documento 6", 5); // tentando passar o limite

console.log("\nImprimindo os documentos na fila.");

console.log(impressora.dequeue()); // imprime "Trabalho de Estrutura de Dados"
console.log(impressora.dequeue()); // imprime "Projeto Interdisciplinar"
console.log(impressora.dequeue()); // imprime "Conta de luz"

// mostrando status da fila
console.log(impressora.filaAtual()) // Mostra os documentos

