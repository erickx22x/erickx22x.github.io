window.addEventListener('load',function(){

  var enviar = document.getElementById('Enviar');
  var quartos = document.getElementById('Quartos');
  var telefone = document.getElementById('Telefone');
  var crianca = document.getElementById('Children');
  telefone.addEventListener('blur',verificarTel, false);
  enviar.addEventListener('click',calcular,false);
  quartos.addEventListener('click',validarData,false);
  crianca.addEventListener('click',calcularCrianca, false);
});

function calcular(){
  var dias = validarData();
  var total = calcularCrianca();

  total = total*dias;
  alert("Total: R$"+total);
}

function validarData(){
  var dataChegada = document.getElementById('data_chegada');
  var dataSaida= document.getElementById('data_saida');
  var dataC = new Date(dataChegada.value).getTime();
  var dataS = new Date(dataSaida.value).getTime();

  dataC = dataC /1000/60/60/24;
  dataS = dataS /1000/60/60/24;

  if(dataS < dataC){
    alert("Data de saída tem que ser após data de entrada");
  }else if(this.id == "Quartos"){
  }else{
    var dias;
    return dias = dataS-dataC;
  }

}

function verificarTel(){
  var auxiliar = /\d{11}/;
  if(this.value.search(auxiliar) ==-1){
    alert("Telefone inválido");
  }
}

function calcularCrianca(){
  var crianca = document.getElementById('Children').value;
  var quartos = document.getElementById('Quartos').value;
  var quantCrianca = parseInt(crianca);
  var tipoQuarto = parseInt(quartos);
  var precoQuarto;

  if(this.id == "Children" && tipoQuarto == 2 && quantCrianca > 2 || this.id == "Children" && tipoQuarto == 3 && quantCrianca > 1){
    alert("Quantidade de hóspedes excedido.");
  }

  if(tipoQuarto == 1){
    precoQuarto = 139;
  }else if(tipoQuarto == 2 ){
    precoQuarto = 220;
  }else
    precoQuarto = 340;

  return precoQuarto+(30*quantCrianca);
}
