//Classe que cria um item com as informações do modal como título e descrição
class Item {
    //O construtor recebe como parâmetro o titulo e a descrição do item
    constructor(title, description) {
        this.title = title;
        this.description = description;
    };
};

//Classe do modal que cria, abre e fecha um modal
class Modal {
    
    //O construtor da classe Modal passa o item criado acima como parâmetro
    constructor(itens) {
        this.itens = itens;
        this.currentItemIndex = 0;

        this.modalElement = document.getElementById('modal');
        this.titleElement = document.getElementById('modal-title');
        this.descriptionElement = document.getElementById('modal-description');
        this.closeButton = document.getElementById('modal-close');

        //O botão de fechar ja´recebe o método para fechamento do Modal
        this.closeButton.addEventListener('click', () => this.close());
    };

    //Método da classe que faz o modal abrir
    open(index) {
        
        //Verifica se existe algum item no array de itens
        if (index >= 0 && index < this.itens.length) {
            //Índice do item atual
            this.currentItemIndex = index;
            //O título do modal é o textContent do título do item dentro do array
            this.titleElement.textContent = this.itens[index].title;
            //A descrição do modal é o textContent da descrição do item do array
            this.descriptionElement.textContent = this.itens[index].description;
            //Exibe o item atual [index]
            this.modalElement.style.display = 'block';
        };
    };

    //Método para fechar o modal
    close() {
        this.modalElement.style.display = 'none';
    };
};

//Exemplo de aplicação
let itens = [
    new Item('Item 1', 'Descrição do item 1'),
    new Item('Item 2', 'Descrição do item 2'),
    new Item('Item 3', 'Descrição do item 3')
];

let modal = new Modal(itens);

document.getElementById('open-item-1').addEventListener('click', () => modal.open(0));
document.getElementById('open-item-2').addEventListener('click', () => modal.open(1));
document.getElementById('open-item-3').addEventListener('click', () => modal.open(2));