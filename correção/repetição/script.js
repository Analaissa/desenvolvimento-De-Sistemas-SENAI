// 1) Escreva um algarismo que calcule e imprima a tabuada do 8 (1 a 10).
function ex1(){
//var contador =1
//while (contador <= 10){
//    contador++
//}
let tabuada = number (prompt("qual tabuada?"));

for(i = 1;i <= 10;i++){
alert(`${tabuada} x ${i} = ${i * tabuada}`);
}
}

//2) Escreva um algarismo para imprimir os 10 primeiros numeros inteiros maiores que 100
function ex2(){
    for(i = 1;i <= 10;i++){
        alert(i)
    }
}
  
  // 3) Escreva um algarismo para ler 10 numeros e ao final da leitura escrever  a soma total dos 10 numeros lidos
  function ex3(){
    var soma =0
    for(i = 1;i <= 10;i++){
        let numero = number(prompt(`digite o seu ${i} 
            soma += numero
        }
            alert(`A soma dos numeros é de ${soma}`)
}