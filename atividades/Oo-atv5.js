class Funcionario{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    };

    aumentarSalario(porcentagem){
        let aumento = this.salario * porcentagem;
        console.log('Olá ' + this.nome + ', parabéns! você recebeu um aumento de ' + aumento + ' e agora seu salário é de ' +  (this.salario + aumento));
    };
};

class Empresa {
    constructor(){
        this.funcionarios = []
    };

    addFuncionario(novoFuncionario){
        if(novoFuncionario instanceof Funcionario){
            this.funcionarios.push(novoFuncionario);
        }else{
            console.log('O objeto fornecido não é uma instância da classe Funcionario');
        };
    };

    exibirFuncionarios(){
        console.log(this.funcionarios);
    }
};


empresa1 = new Empresa ();

anderson = new Funcionario('Anderson', 'Automação industrial', 654);

david = new Funcionario('David', 'Programação', 728);

empresa1.addFuncionario(anderson);

empresa1.addFuncionario(david);

empresa1.exibirFuncionarios();