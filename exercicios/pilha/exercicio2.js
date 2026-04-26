import Bau from "./bauexercicio2.js";

// Introduçao
console.log(`\nBaú de Tesouros do Barbarruiva.`);

// adicionando tesouros
const tesouro = new Bau();

tesouro.guardar("Barra de ouro");
tesouro.guardar("Espada");
tesouro.guardar("Diamante");

// mostrando tesouros antes de remover
console.log(`Tesouros: ${tesouro.olhar()}.`);
console.log(" ");

// tirando ultimo tesouro guardado
console.log(`${tesouro.retirar()}`);

// olhando último tesouro
console.log(`Agora os tesouros são: ${tesouro.olhar()}.`);

// vendo se está vazio
console.log(tesouro.verificar());