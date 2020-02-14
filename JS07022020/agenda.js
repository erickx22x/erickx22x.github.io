class Agenda{
	constructor (){
		this.contato = [];
	} 	
	
	criar(){
	      var nome = prompt("Informe o Nome!");
	      var sobrenome = prompt("Informe o Sobrenome!");
	      var nascimento = prompt("Informe o Nascimento!");
	      var tipo = prompt("Informe o Tipo do telefone!");
	      var ddd = prompt("Informe o DDD!");
	      var num = prompt("Informe o Numero!");

	      this.adicionarContato(nome, sobrenome, nascimento, tipo, ddd, num);
	}
	
	adicionarContato(nome,sobrenome,idade,tipo,ddd,num){
		this.contato.push(new Contato(new Pessoa(nome,sobrenome,idade)),new Numero(tipo,ddd,num));
	}
}

class Contato
  {
    constructor(pessoa, numero)
    {
      this.pessoa = pessoa;
      this.numero = [];
      this.numero.push(numero);
      this.end = [];
      this.email = [];
    }
    addInfo()
    {
      n = prompt("Adicionar: Numero (1); Endereço(2); Email(3)");
      if (n == 1)
      {
        tipo = prompt("Tipo de telefone?");
        ddd = prompt("DDD?");
        num = prompt("Numero?");
        this.adicionarNumero(tipo, ddd, num);
      }
      if (n == 2)
      {
        tipo = prompt("Tipo do Endereço?");
        logradouro = prompt("Logradouro?");
        num = prompt("Numero?");
        cep = prompt("CEP?");
        complemento = prompt("Complemento?");
        this.adicionarEndereco(tipo, logra, num, cep, comp);
      }
      if (n == 3)
      {
        tipo = prompt("Tipo do Email?");
        email = prompt("Email?);
        this.adicionarEmail(tipo, email);
      }
      else
      {
        alert("Entre com 1 2 ou 3");
        this.addInfo();
      }
    }
    
    adicionarNumero(tipo, ddd, num)
    {
      this.numero.push(new Numero(tipo, ddd, num));
    }
    
    adicionarEndereco(tipo, logra, num, cep, comp)
    {
      this.end.push(new Endereco(tipo, logra, num, cep, comp));
    }
    
    adicionarEmail(tipo, email)
    {
      this.email.push(new Email(tipo, email));
    }
  }

class Numero{
	constructor(tipo,ddd,num){
		this.tipo = tipo;
		this.ddd = ddd;
		this.num = num;
	} 
}

class Pessoa {
	constructor(nome, sobrenome, idade){
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
	}
}

class Email{
	constructor(tipo, email){
		this.tipo = tipo;
		this.email = email;
	}
}

class Endereco{
	constructor(tipo, logradouro, cep, num, complemento){
		this.tipo = tipo;
		this.logradouro = logradouro;
		this.cep = cep;
		this.num = num;
		this.complemento complemento;
	}

}
var confirmar = new Agenda();
