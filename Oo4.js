//USANDO O MÉTODO SET PARA ALTERAR UMA PROPRIEDADE DA CLASSE PESSOA FORA DO ESCOPO DA MESMA
//DEFININDO A CLASSE PESSOA QUE TEM AS PROPRIEDADES CITADAS ABAIXO
class Pessoa {
    constructor(nome, idade, sexo, endereco, email) {
        this._nome = nome //O UNDERLINE REPRESENTA QUE ESSA PROPRIEDADE É PRIVADA DA CLASSE PESSOA
        this.idade = idade
        this.sexo = sexo
        this.endereco = endereco
        this.email = email
    };

    //O SET(SETTER) DEFINE QUE A PROPRIEDADE NOME PODE RECEBER MODOFICAÇÕES VINDAS DE FORA DA CLASSE
    set nome(novoNome) {
        this._nome = novoNome;
    };

    obterNome() {

    };
};

//CRIANDO UMA NOVA INSTÂNCIA PARA A CLASSE PESSOA, DEFINNDO O NOME DA NOVA PESSOA COMO VAZIO E PASSANDO O VALOR
//...DA PROPRIEDADE FORA DA CLASSE
let pessoa1 = new Pessoa('', 27);
pessoa1.nome = 'Carlos';
console.log(pessoa1);