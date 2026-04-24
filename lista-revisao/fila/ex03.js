import Fila from "../fila/fila.js";

let filaNormal = new Fila();
let filaPreferencial = new Fila();

// funçao enfileirar por nome e idade
// se a idade for maior ou igual a 60 entra na fila preferencial
// se não, fila normal
function enfileirar(nome, idade){
    if(idade >= 60) filaPreferencial.enqueue(nome);
    else filaNormal.enqueue(nome);
}

// funçao atender: se a fila preferencial estiver vazia, desenfileira ela
// se não, desenfilera a fila nomal
function atender(){
    if (!filaPreferencial.isEmpty()) return filaPreferencial.dequeue();
    else return filaNormal.dequeue();
}

// enfileirando nomes com idades
// isso vai ficar: da maior idade para a menor
enfileirar("Dona Maria", 65);
enfileirar("Carlos", 30);
enfileirar("Seu João", 70);
enfileirar("Ana", 25);

while(!filaNormal.isEmpty() || !filaPreferencial.isEmpty()){
    console.log("Atendendo:", atender());
}