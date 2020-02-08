class Agenda{
	constructor (){
		this.contato = [];
	} 	

	adicionarContato(nome,sobrenome,idade,tipo,ddd,num){
		this.contato.push(new Contato(new Pessoa(nome,sobrenome,idade)),new Numero(tipo,ddd,num));
	}
}

class Contato{
	constructor(pessoa, num){
		this.pessoa = pessoa;
		this.num = [];
		this.num.push(num);
		this.end=[];
		this.email=[];
	}
	adicionarNumero(tipo,ddd,num){
		this.num.push(new Numero(tipo,ddd,num));
	}

	adicionarEndereco(tipo, logradouro, cep, num, complemento){
		this.end.push(new Endereco(tipo,logrodouro, cep, num, complemento));
	}
	adicionarEmail(tipo, email){
		this.email.push(new Email(tipo,email));
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
