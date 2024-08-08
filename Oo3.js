//OUTROS EXEMPLOS DE OO E CONCEITO DE HERANÇA
//ABAIXO TEMOS A CLASSE PRINCIPAL Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
    //MÉTODO PARA APRESENTAR UMA PESSOA
    apresentar() {
        console.log('Olá me chamo', this.nome, 'e tenho', this.idade);
    };
};

//NOVA PESSOA CRIADA
let novaPessoa = new Pessoa('David', 27);
console.log(novaPessoa.apresentar());

//DEFININDO UMA SUBCLASSE ESTUDANTE QUE HERDA DE PESSOA
class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); //OBS: SUPER PERMITE O ACESSO DA CLASSE ESTUDANTE ÀS PROPRIEDADES DA CLASSE PESSOA
        this.curso = curso
    };

    //MÉTODO ESPECÍFICO DA SUBCLASSE ESTUDANTE
    estudar() {
        console.log(this.nome, 'está estudando', this.curso);
    };
};

let estudante1 = new Estudante('Maria', 22, 'Engenharia');
console.log(estudante1.estudar());

let estudante2 = new Estudante('Rodrigo', 34, 'Eletromecânica')
console.log(estudante2.estudar());

class Automovel extends Pessoa {
    constructor(nome, idade, carro){
        super(nome, idade);
        this.carro = carro;
    };

    dirige(){
        console.log(this.nome + 'dirige' + this.carro);
    }
};

let david = new Pessoa('David', 27, 'Gol');
console.log(david.dirige());