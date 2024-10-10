const lista = [
    "casa", 
    "carro", 
    "esposa", 
    10000
];

lista.push("filhos", "parentes");
lista.pop();
lista.shift();
lista.unshift("Prédio");
lista.splice(1,0, "Item adicionado 1", "Item adicionado 2");
lista.splice(1,2, "Item adicionado 3", "Item adicionado 4");

//////////////////////////////////////////////////////////////

const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "CR7",
    "Vampeta",
    "Felipe Luiz"
];

const craques = jogadores.slice(2, 6);
const jogOrdem = jogadores.sort();
const jogreverce = jogadores.reverse();

console.log(lista, craques, jogOrdem, jogreverce);