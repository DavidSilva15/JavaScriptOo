//CRIA UMA CLASSE ANIMAL QUE RECEBE O NOME E O SOM QUE CADA NOVO ANIMAL POSSUI
class Animal {
    constructor(nome, som){
        this.nome = nome;
        this.som = som;
    };

    //MÉTODO QUE REPRODUZ O SOM DOS ANIMAIS
    fazerSom(){
        document.write('Latir e miar');
    };
};

//CRIA UMA CLASSE CACHORRO QUE HERDA MÉTODOS DA CLASSE ANIMAL
class Cachorro extends Animal {

};

//CRIA UMA CLASSE GATO QUE HERDA MÉTODOS DA CLASSE ANIMAL
class Gato extends Animal {

};

//CRIA UM NOVO ANIMAL DA CLASSE CACHORRO
let nelson = new Cachorro();
//EXECUTA O MÉTODO HERDADO DA CLASSE ANIMAL
nelson.fazerSom();