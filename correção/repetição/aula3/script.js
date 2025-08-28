//var produto1 = "jogo midnight club"
//var produto2 = "camiseta esportiva"
//var produto3 = "guitarra"

var produtos = array();
var produto = [];
console.log(produtos)

produtos[0] = "Guitarra"
produtos [1] = "Camiseta esportiva"
produtos[2] = "Jogos Midnight Club"
console.log(produtos)

var carrinho ={"Tenis da adidas"}

//comandos  do array
// add no fim
carrinho.push("violão")
console.log(carrinho)
//add no começo 
carrinho.unshift("placa de video")
console.log(carrinho)
//remove no fim
carrinho.pop()
console.log(carrinho)
//remove no começo
carrinho.shift()
console.log(carrinho)
//mexe no meio (indice , quantos sobrescreve, dados)
carrinho.push("kikat")
carrinho.push("relogio de couro")
carrinho.push("diamante do free fire")
console.log(carrinho)
carrinho.splice(2,0 "robux")
carrinho.log(carrinho)
carrinho.splice(0,1,"tenis da nike")
console.log(carrinho)