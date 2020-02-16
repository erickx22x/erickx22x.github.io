window.addEventListener('load',function(){
  var escrever = document.getElementById('escrever');
  var editar = document.getElementById('editar');
  escrever.addEventListener('keydown', alterar)
});

function alterar(){
  editar.innerHTML = escrever.value;
}
