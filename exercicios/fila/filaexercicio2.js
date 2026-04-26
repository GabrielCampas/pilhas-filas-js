export default class Documentos{
    // limitando a capacidade a 5 documentos
    #fila = [];
    #capacidade = 5;

    // inicio da fila
    #inicio = 0;

    // final da fila
    #fim = 0;

    // métodos para verificaçao
    estaVazio(){
        return this.#capacidade.length === 0;
    }

    estaCheio(){
        return this.#fila.length >= this.#capacidade;
    }

    // adiciona ao fim da fila
    enqueue(nome, pagina){
        // caso a fila esteja cheia
        if(this.estaCheio()){
            return `A fila está cheia, não é possível adicionar o documento.`;
        }

        // constante documento vai receber um nome e quant paginas
        const documento = {nome, pagina};
        
        // adicionando o documento ao final com .push()
        this.#fila.push(documento);

        console.log(`Documento: "${nome}" | Páginas: "${pagina}" | Adicionado com sucesso.`);
    }

    // dequeue no primeiro da fila
    dequeue(){
        // se estiver vazio
        if(this.estaVazio()){
            return `Fila vazia.`;
        }

        // removendo o primeiro elemento e retornando ele
        const documentoRemovendo = this.#fila.shift();

        return `Imprimindo "${documentoRemovendo.nome}" de "${documentoRemovendo.pagina}" páginas.`;
    }

    filaAtual(){
        return `\nDocumentos na fila: ${this.#fila.length}/${this.#capacidade}.`
    }
}