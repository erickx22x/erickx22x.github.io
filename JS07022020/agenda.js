
class Agenda{
  constructor(){
    this.contato = [];
  }
  criar(nome, sobrenome, nascimento, ddd, numero, numtipo, endtipo, logradouro, cep, endnum, complemento, mailtipo, email){
    this.contato.push(new Contato(new Pessoa(nome, sobrenome, nascimento), new Numero(ddd, numero, numtipo), new Endereco(endtipo, logradouro, cep, endnum, complemento), new Email(mailtipo, email)));
  }

  escrever(){
    var mensagens = ["Nome","Sobrenome","Data de Nascimento","DDD","Número", "Tipo do número(casa, trabalho,etc)", "Tipo do endereço(casa, trabalho,etc)", "Logradouro", "CEP", "Número", "Complemento", "Tipo do email(pessoal, trabalho, etc)", "E-mail"];
    var dados = [];
    for(var i=0; i < mensagens.length; i++){
      dados.push(window.prompt("Informe " + mensagens[i]));
    }

    novo.criar(dados[0], dados[1], dados[2], dados[3], dados[4], dados[5], dados[6], dados[7], dados[8], dados[9], dados[10], dados[11], dados[12]);
  }
}

class Contato{
  constructor(pessoa, num, endereco, email){
    this.pessoa = pessoa;
    this.num = [];
    this.num.push(num);
    this.endereco = [];
    this.endereco.push(endereco);
    this.email = [];
    this.email.push(email);
  }
  addNovo(){
    var opcao = window.prompt("Opções: 1- Número, 2- Endereço, 3- E-mail");
    if(opcao == 1){
      var ntipo = window.prompt("Digite o tipo do número");
      var ddd = window.prompt("Digite o ddd");
      var nnum = window.prompt("Digite o número");
      this.addNum(ddd,nnum,ntipo);
    }else if(opcao == 2){
      var tipo = window.prompt("Digite o tipo do endereço");
      var logr = window.prompt("Digite o logradouro");
      var cep = window.prompt("Digite o cep");
      var num = window.prompt("Digite o número");
      var comp = window.prompt("Digite o complemento");
      this.addEnd(tipo, logr, cep, num, comp);
    }else if(opcao ==3){
      var mailtipo = window.prompt("Digite o tipo do email(casa, serviço...)");
      var email = window.prompt("Digite o email");
      this.addEmail(mailtipo, email);
    }else{
      alert("Inválido");
      this.addNovo();
    }
  }

  addNum(ddd,nnum,ntipo){
    this.num.push(new Numero(ddd,nnum,ntipo));
  }
  addEnd(tipo, logr, cep, num, comp){
    this.endereco.push(new Endereco(tipo, logr, cep, num, comp));
  }
  addEmail(mailtipo, email){
    this.email.push(new Email(mailtipo,email));
  }
}

class Pessoa{
  constructor(nome, sobrenome, nascimento){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nascimento = nascimento;
  }
}

class Numero{
  constructor(ddd, numero, tipo){
    this.ddd = ddd;
    this.numero = numero;
    this.tipo = tipo;
  }
}

class Endereco{
  constructor(tipo, logradouro, cep, num, complemento){
    this.tipo = tipo;
    this.logradouro = logradouro;
    this.cep = cep;
    this.num = num;
    this.complemento = complemento;
  }
}

class Email{
  constructor(tipo, email){
    this.tipo = tipo;
    this.email = email;
  }
}

var novo = new Agenda();

window.addEventListener('load', function() {
    var criar = document.getElementById('criar');
    criar.addEventListener('click', novo.escrever, false);
});
