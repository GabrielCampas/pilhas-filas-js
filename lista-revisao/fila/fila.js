export default class Fila {
    #items = [];

    // Adiciona um elemento ao final da fila
    enqueue(elemento) {
        this.#items.push(elemento);
    }

    // Remove o primeiro elemento da fila (o que chegou primeiro)
    dequeue() {
        if (this.isEmpty()) return "A fila está vazia!";
        // shift() remove o elemento no índice 0 e "empurra" os outros para frente
        return this.#items.shift();
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.#items.length === 0;
    }
}