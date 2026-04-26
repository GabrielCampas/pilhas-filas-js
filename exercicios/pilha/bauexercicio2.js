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

        // pega o item do topo
        const tesouroRemovido = this.#items[this.#quantitade - 1];

        // remove o item do topo do array
        this.#items.pop();

        // atualiza a quantidade de itens
        this.#quantitade--;
        return `Barbarruiva retirou: ${tesouroRemovido}.`;
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