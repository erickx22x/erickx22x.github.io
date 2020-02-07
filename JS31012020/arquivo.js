function alerta()
{
  alert("Teste de alerta");
};

function confirma()
{
  confirm("confirmado");
};

function prompt1()
{
  invert = prompt("Digite uma palavra:");

  (invert == reverterStr(invert) ? alert("é um palíndromo") : alert("não é um palíndromo"));
};

function reverterStr(str)
{
    return str.split("").reverse().join("");
};

function fatorial(num)
{
  return num <= 0 ? 1 : num*(fatorial(num-1));
};

function fato_prom()
{
  num = parseInt(prompt("Digite um número inteiro:"));
  alert(fatorial(num));
};
