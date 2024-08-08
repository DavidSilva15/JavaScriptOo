//A classe Pessoa representa uma pessoa
//O constructor recebe nome e idade como parâmetros
//O this define que, para cada nova pessoa criada, a atribuição do nome e idade será definida no momento da criação
class Pessoa {
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    };
    
    //Método para apresentar a pessoa 
    apresentar(){
        console.log('Olá, meu nome é', this.nome, 'e eu tenho', this.idade, 'anos, sou', this.cargo);
    }
};

//Abaixo é criada uma nova instancia (Uma nova pessoa), e, para ela são passados os dados nome, idade e cargo como parâmetros
let novaPessoa = new Pessoa('David', 30, 'programador');

//Aqui chamamos a função(método) para apresentar a nova pessoa criada
novaPessoa.apresentar();