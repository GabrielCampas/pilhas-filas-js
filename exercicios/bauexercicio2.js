// revisar funcao olhar e verificar

export default class Bau {
    #items = [];
    #quantitade = 0;

    // guardando item no bau
    guardar(elemento) {
        // items recebe quantidade de tesouro
        this.#items[this.#quantitade] = elemento;

        // aumenta a quantidade
        this.#quantitade++;
    }

    // tirando item do bau
    retirar() {
        if (this.#quantitade === 0) {
            return "\nNão há tesouros no baú.";
        }

        // tirando último tesouro adicionado
        const ultimoTesouro = this.#items[this.#quantitade - 1];

        // removendo o ultimo item e diminuindo contador
        this.#items[this.#quantitade - 1] = undefined;
        this.#quantitade--;
        
        // retornando apenas o item da última posição
        return `Barbarruiva retirou ${this.#items[this.#quantitade - 2]}`
    }

    // olhando itens no bau sem pegar
    olhar() {
        if (this.#quantitade === 0) return "\nO baú está vazio.";
        return this.#items;
    }

    // saber se esta vazio
    verificar() {
        console.log(`O baú está...`)
        if (this.#quantitade === 0) {
            console.log("Vazio.");
        }

        return `Preenchido com ${this.#quantitade} itens.`;
    }
}