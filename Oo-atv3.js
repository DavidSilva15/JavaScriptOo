//CRIA UMA CLASSE LIVRO QUE RECEBE COMO PARÃMETRO título, autor e anoPublicacao
class Livro {
    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    };
};

//CRIA UMA CLASSE BIBLIOTECA QUE INICIALIZA UM ARRAY VAZIO DE LIVROS
class Biblioteca {
    constructor(){
        this.livros = [];
    };
    
    //MÉTODO PARA ADICIONAR LIVROS, VERIFICA SE O NOVO LIVRO PASSADO COMO PARÂMETRO É UMA INSTÂNCIA DA CLASSE LIVRO
    addLivro(livro){
        if(livro instanceof Livro){
            this.livros.push(livro);
        }else{
            console.log('O objeto fornecido não é uma instância da classe Livro');
        };
    };

    //MÉTODO PARA LISTAR OS LIVROS
    listaLivros(){
        return this.livros.forEach((livro)=>{
            document.write('Título: ' + livro.titulo + '</br>' + 'Autor: '+ livro.autor + '</br>' + 'Ano de publicação: ' + livro.anoPublicacao + '</br>' + '</br>' + '<hr>');
        });
    };

    //MÉTODO PARA REMOVER UM LIVRO PELO TÍTULO
    removerLivro(titulo){
        this.livros = this.livros.filter(livro => livro.titulo.toLowerCase() !== titulo.toLowerCase());
    };
};

//INICIALIZA UMA NOVA BIBLIOTECA
let biblioteca = new Biblioteca();

//CRIA DOIS LIVROS
let livro1 = new Livro('1984', 'George Orwell', 1949);
let livro2 = new Livro('O senhor dos anéis', 'J.R.R. Tolkien', 1954);

//ADICIONA OS LIVROS ÀS BIBLIOTECAS
biblioteca.addLivro(livro1);
biblioteca.addLivro(livro2);

//REMOVE O LIVRO INDICADO DA LISTA DE LIVROS
biblioteca.removerLivro('O senhor dos anéis');

//EXIBE A LISTA DE LIVROS
biblioteca.listaLivros();