//CRIA UMA CLASSE PESSOA QUE RECEBE nome, idade e profissao COMO PARÂMETROS
class Pessoa {
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    };

    //MÉTODO PARA APRESENTAR A PESSOA
    apresentar(){
        document.write('Olá, meu nome é ' + this.nome + ', tenho ' + this.idade + ' e sou ' + this.profissao);
    }
};

//CRIA UMA NOVA PESSOA
let pessoa1 = new Pessoa ('David', 27, 'Programador');

//APRESENTA A NOVA PESSOA
pessoa1.apresentar();