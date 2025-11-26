class carro{
// objeto modelo "carro" 
constructor(imagem,marca,modelo,ano,cor,velocidademaxima){
this.imagem = imagem
this.marca = marca
this.modelo = modelo
this.ano = ano
this.cor = cor
this.velocidademaxima = velocidademaxima
}
}
// criando 3 carros
 var carro1 = new carro(
  " https://s3.ecompletocarros.dev/images/lojas/209/veiculos/103208/veiculoInfoVeiculoImagesMobile/vehicle_image_1654534767_a8829f45155992b44d64bb13b29ece51.jpeg",
  "toyota","corolla", 2022,"prata",210
);

 var carro2 = new carro(
    "https://s3.ecompletocarros.dev/images/lojas/259/veiculos/70168/veiculoInfoVeiculoImagesMobile/vehicle_image_1628629009_27a99a0ef24576c18ef980c2c2ad2932.jpeg",
    "ford","mustang",2021,"vermelho",250
);

 var carro3 = newcarro(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3J3hAeWM3qow3RFko-OpXLXa0FUA8ERrBg&s",
    "chevrolet","onix",2023,"preto",190
);

 var carros =[carro1,carro2,carro3];

// mostra Carros no HTML const concessionaria = document.getElementbyld("concessionaria");

carros.forEach(carro => {
const div = document.createElement("div");
div.classname = "carro";
div.innerHTML =` 
<img src="${carro.imagem}" alt="${carro.modelo}">
 <div class="info">
 <h2>
  
 </div>
`
});
