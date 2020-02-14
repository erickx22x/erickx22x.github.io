function Calcular(){
    var i = window.prompt("Digite o ano de nascimento");
    calcularIdade(i);
}

function calcularIdade(birthday) {
    var dob_timestamp = new Date(birthday).getTime();
    var age = ((new Date()).getTime() - dob_timestamp) / (31556926000);
    document.getElementById("result").innerHTML = (age.toFixed(1)) + " Anos";
}
