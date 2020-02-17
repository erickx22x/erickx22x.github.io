var saida;
window.addEventListener('load',function(){

  this.document.getElementById("button-0");
  this.document.getElementById("button-1");
  this.document.getElementById("button-2");
  this.document.getElementById("button-3");
  this.document.getElementById("button-4");
  this.document.getElementById("button-5");
  this.document.getElementById("button-6");
  this.document.getElementById("button-7");
  this.document.getElementById("button-8");
  this.document.getElementById("button-9");
  var clear = document.getElementById("button-C");
  var soma =   document.getElementById("button-+");
  var sub =   document.getElementById("button--");
  var mult =   document.getElementById("button-*");
  var divisao =   document.getElementById("button-/");
  var result =   document.getElementById("button-=");
  saida = document.getElementById('calc-output');

  for(var i=0; i<=9; i++){
    this.document.getElementById("button-"+ i).addEventListener('click',output,false);
  }
  clear.addEventListener('click', resultado,false);
  soma.addEventListener('click', output,false);
  sub.addEventListener('click', output,false);
  mult.addEventListener('click', output,false);
  divisao.addEventListener('click', output,false);
  result.addEventListener('click', resultado,false);

});

function output(){
  if(saida.innerHTML== '0' ?   saida.innerHTML = this.value : saida.innerHTML += this.value);
}

function resultado(){
  if(this.id == "button-C" ? saida.innerHTML = '0' : saida.innerHTML = eval(saida.innerHTML));
}
