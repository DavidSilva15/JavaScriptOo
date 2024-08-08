//CRIA UMA CLASSE ContaBancaria E RECEBE OS PARÂMETROS saldo e numeroConta
class ContaBancaria {
    constructor(saldo, numeroConta){
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    };
    
    //MÉTODO PARA DEPOSITAR VALORES NA CONTA INFORMADA
    depositar(valor){
        this.saldo += valor;
    };
    
    //MÉTODO PARA SACAR VALORES NA CONTA INFORMADA
    sacar(valor){
        if(this.saldo == 0){
            console.log('Transação negada. Seu saldo atual de : ' + this.saldo);
        }else{
            this.saldo -= valor;
        }
    };
    
    //MÉTODO PARA EXIBIR O SALDO ATUALIZADO
    verSaldo(){
        console.log('O saldo da conta ' + this.numeroConta + ' é de: ' + this.saldo);
    }
};

//CRIA UMA NOVA CONTA COM O VALOR E O NUMERO DA CONTA E DEPOSITA 50. RETIRA 2X 25 E ATUALIZA O SALDO NÃO SENDO POSSÍVEL MAIS SACAR CASO O SALDO SEJA 0
conta1 = new ContaBancaria (0, 3206);
conta1.depositar(50);
conta1.sacar(25);
conta1.sacar(25);
conta1.verSaldo();