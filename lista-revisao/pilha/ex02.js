let undo = [];
let redo = [];

// funçao de escrever
function type(letter){
    undo.push(letter);
    redo = [];
}

// funçao que desfaz
function undoAction(){
    if(undo.length > 0){
        let last = undo.pop();
        redo.push(last);
    }
}

// funçao que refaz
function redoAction(){
    if(redo.length > 0){
        let back = redo.pop();
        undo.push(back);
    }
}

// empilhando a, b, c
type("A");
type("B");
type("C");
// desfazer 1 -> retira o c
undoAction();
// desfazer 2 -> retira o b
undoAction();
// refazer 1 -> coloca o b de volta
redoAction();

// saída: AB
console.log("Conteúdo atual:", undo.join(''));