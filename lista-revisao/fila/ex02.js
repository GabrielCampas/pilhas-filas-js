import Fila from "../fila/fila.js";

let pedidos = new Fila();

// colocando pedidos na fila
pedidos.enqueue("Pedido do João");
pedidos.enqueue("Pedido da Maria");
pedidos.enqueue("Pedido do Pedro");

// tempo por pedido: 2 min
let tempoPorPedido = 2;
let total = 0;

// pedido recebe pedidos desenfileirados
// tempo por pedido é incrementado ao total
// a saída mostra os pedidos e o total de tempo que levaram, multiplicando por 2
while (!pedidos.isEmpty()){
    let pedido = pedidos.dequeue();
    total += tempoPorPedido;
    console.log(`${pedido} atendido. Tempo acumulado: ${total} minutos.`);
}