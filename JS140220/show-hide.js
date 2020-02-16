function get(id){
  return document.getElementById(id);
}

function ocultar(id){
  console.log(id);
  if(id.style.display == 'none'){
    id.style.display='inline';
  }else{
    id.style.display='none';
  }
}
