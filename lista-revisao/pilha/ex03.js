let module = [];

// adicionando modulos no array
module.push("Módulo 1");
module.push("Módulo 2");
module.push("Módulo 3");
console.log("Ordem de retorno: ");

// retornando todos os módulos em ordem
while(module.length > 0){
    console.log("- Retornando: ", module.pop());
}