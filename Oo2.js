//CAPTURA OS ELEMENTOS HTML PARA NOME, IDADE, CARGO E O BTN CADASTRAR
let nome = document.getElementById('nome');
let idade = document.getElementById('idade');
let cargo = document.getElementById('cargo');
let btnCadastrar = document.getElementById('cadastrar');

//ARRAY DE PESSOAS QUE VAI RECEBER AS NOVAS PESSOAS
let pessoas = [];

//A CLASSE QUE REPRESENTA UMA PESSOA COM OS ATRIBUTOS E MÉTODOS
class Pessoa {
    constructor(nome, idade, cargo) {
        this.nome = nome; //O THIS FAZ COM QUE O NOME DE CADA NOVA PESSOA CRIADA SEJA O NOME DEFINIDO NO PARÂMETRO, E ASSIM SUCESSIVAMENTE
        this.idade = idade;
        this.cargo = cargo;
    };

    //O MÉTODO CADASTRAR CRIA UMA NOVA PESSOA E PASSA OS RESPECTIVOS VALORES
    cadastrar() {
        let novaPessoa = new Pessoa(this.nome, this.idade, this.cargo);
        pessoas.push(novaPessoa); //ADICIONA A NOVA PESSOA AO ARRAY
    }

    //MÉTODO PARA EXIBIR O ARRAY DE PESSOAS CADASTRADAS A CADA NOVO CADASTRO
    static exibirPessoas() {
        console.log(pessoas);
    }
};

//OUVINTE DE EVENTOS NO BTN CADASTRAR QUE CAPTURA OS VALORES DOS INPUTS E PASSA PARA A NOVA PESSOA
btnCadastrar.addEventListener('click', () => {
    let novaPessoa = new Pessoa(nome.value, idade.value, cargo.value);
    nome.value = '', idade.value = '', cargo.value = '' //LIMPA OS CAMPOS
    novaPessoa.cadastrar();
    Pessoa.exibirPessoas();
});