function Idade()
{
  d = prompt("Informe o dia do seu nascimento");
  m = prompt("Informe o mes do seu nascimento");
  y = prompt("Informe o ano do seu nascimento");

  nasc = new Date(y, m, d);
  idade = Math.floor((Date.now() - nasc)/31557600000);

  alert("Sua idade é " + idade);
}
