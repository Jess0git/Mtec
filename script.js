//cria um objeto produto que futuramente irá receber valores dos inputs
class Produto{
    constructor(IDProduto,nomeProduto,precoProduto,linkImg,setorProduto){
        this.IDProduto = IDProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.linkImg = linkImg;
        this.setorProduto = setorProduto;
    }
        getIDProduto(){
        let IDProduto = this.IDProduto;
        return IDProduto;
    }
        getnomeProduto(){
        let nomeProduto = this.nomeProduto;
        return nomeProduto;
    }
        getprecoProduto(){
        let precoProduto = this.precoProduto;
        return precoProduto;
    }
        getlinkImg(){
        let linkImg = this.linkImg;
        return linkImg;
    }
        getsetorProduto(){
        let setorProduto = this.setorProduto;
        return setorProduto
    }

}

class Usuario{
    constructor(nomeUsuario,senha){ 
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
       }
       getUsuario(){
       let usuario = this.nomeUsuario;
       return usuario
    }
        getSenha(){
        let senha = this.senha;
        return senha
    }

        setUsuario(newUsuario){
        this.nomeUsuario = newUsuario
        console.log('Usuario alterado')
    }
        setSenha(newSenha){
        this.senha = newSenha
        console.log('senha alterada')
    }
}

class Setor{
    constructor(nomeSetor, IDSetor){
        this.nomeSetor = nomeSetor;
        this.IDSetor = IDSetor;
    }
        getNomeSetor(){
        let nomeSetor = this.nomeSetor;
        return nomeSetor;
    }
        getIDSetor(){
        let IDSetor = this.IDSetor;
        return IDSetor;
    }

        setNomeSetor(NewNomeSetor){
        this.nomeSetor = NewNomeSetor;
        console.log('troca de nome bem sucedida');
    }
        setIDSetor(NewIDSetor){
        this.IDSetor = NewIDSetor;
        console.log('troca de ID bem sucedida');
    }
}

let acessPagloginBtn = document.getElementById("acssPaglog-in");
let containerLogIn = document.getElementById("containerLog-in");
acessPagloginBtn.addEventListener('click', ()=>{containerLogIn.className="LoginAtivo"} );

let btnLogIn = document.getElementById("login-btn");
btnLogIn.addEventListener('click', verificarLogin);

 function sairBarraDeControle(){
    let barraDeControle = document.getElementById('barraDeControle');
    barraDeControle.style.display='none';
}


function verificarLogin(){
    containerLogIn.className = 'LoginInativo';
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let barraDeControle = document.getElementById('barraDeControle');
    if(Usuario.nomeUsuario==usuario&&Usuario.senha==senha){
        barraDeControle.style.display='block';
    }
    else{
        console.log(Usuario.nomeUsuario)
        alert('informe os dados corretos');
    }
    
}


//FUNÇÕES DE SETORES

//sequencia de codigo referente ao botão criarSetor da barra de controle
let btnSairMenuCriarSetor = document.getElementById('btnSairCriarSetorMenu');
btnSairMenuCriarSetor.addEventListener('click', ()=>{
    let criarSetorMenu = document.getElementById('criarSetorMenu');
    criarSetorMenu.style.display='none';
})

//pega o botão que faz a janela de criação de setor aparecer e adiciona uma função que faz essa janela aparecer
let btnMostrarMenuCriarSetor = document.getElementById('criarSetor');
btnMostrarMenuCriarSetor.addEventListener('click', ()=>{
    let menuCriarSetor = document.getElementById('criarSetorMenu');
    menuCriarSetor.style.display='block';
})
//pega o botão que ativa as funcões de criação e mostragem do novo setor

function mostrarNovoSetor(SetorOBJ){
    let body = document.getElementById('setores');
    let novoSetor = document.createElement('div');
    body.appendChild(novoSetor);
    novoSetor.className = 'Setor';
    novoSetor.id = SetorOBJ.IDSetor;
    let novoSetorNome = document.createElement('h1');
    novoSetor.appendChild(novoSetorNome);
    novoSetorNome.className='NomeSetor';
    novoSetorNome.textContent = SetorOBJ.nomeSetor;
    let novoCarousel = document.createElement('div');
    novoCarousel.className = 'Carousel';
    novoCarousel.id = (SetorOBJ.IDSetor + 'Carousel');
    novoSetor.appendChild(novoCarousel);
}

function criarNovoSetor(){
    let nomeSetor = document.getElementById('nomeSetor').value;
    let IDSetor = document.getElementById('IDSetor').value;
    let novoSetor = new Setor(nomeSetor,IDSetor);
    let barraDeControle = document.getElementById('barraDeControle');
    barraDeControle.style.display='none';
    mostrarNovoSetor(novoSetor);
}


//sequencia de codigo referente ao botão excluirSetor da barra de controle
let btnMostrarMenuExcluirSetor = document.getElementById('excluirSetor');
btnMostrarMenuExcluirSetor.addEventListener('click', ()=>{
    let menuExcluirSetor = document.getElementById('excluirSetorMenu');
    menuExcluirSetor.style.display='block';
})

let btnSairMenuexcluirSetor = document.getElementById('btnSairExcluirSetorMenu');
btnSairMenuexcluirSetor.addEventListener('click', ()=>{
    let excluirSetorMenu = document.getElementById('excluirSetorMenu');
    excluirSetorMenu.style.display='none';
})

function excluirSetor(){
    let IDSetorASerExcluido = document.getElementById('IDSetorASerExcluido').value;
    let setorASerExcluido = document.getElementById(IDSetorASerExcluido);
    let paiSetor = document.getElementById('setores');
    let barraDeControle = document.getElementById('barraDeControle');
    barraDeControle.style.display='none';
    paiSetor.removeChild(setorASerExcluido);
}



//sequencia de codigo referente ao botão editarSetor da barra de controle
let btnMostrarMenudEditarSetor = document.getElementById('editarSetor');
btnMostrarMenudEditarSetor.addEventListener('click', ()=>{
    let menudEditarSetor = document.getElementById('editarSetorMenu');
    menudEditarSetor.style.display='block';
})

let btnSairMenuEditarSetor = document.getElementById('btnSairEditarSetorMenu');
btnSairMenuEditarSetor.addEventListener('click', ()=>{
    let editarSetorMenu = document.getElementById('editarSetorMenu');
    editarSetorMenu.style.display='none';
})

function editarSetor(){
    let IDSetorASerEditado = document.getElementById('IDSetorASerEditado').value;
    let novoIDSetor = document.getElementById('novoIDSetor').value;
    let novoNomeSetor = document.getElementById('novoNomeSetor').value;
    let setor = document.getElementById(IDSetorASerEditado);
    if(novoIDSetor!==undefined||novoIDSetor!==null||novoIDSetor!==""){
        let nomeAntigo = setor.querySelector('h1');
        nomeAntigo.textContent = novoNomeSetor;    
    }
    if(novoNomeSetor!==null){
        setor.id = novoIDSetor;   
    }
    let barraDeControle = document.getElementById('barraDeControle');
}



//FUNÇÕES DE PRODUTOS

//funcões de criação e mostragem do novo produto
function MostrarNovoProduto(ProdutoObj){
    //cria um container para guardar todos os elementos de um produto 
    let setor = document.getElementById(ProdutoObj.setorProduto);
    let carouselSetor = document.getElementById(`${ProdutoObj.setorProduto}Carousel`);
    let produtoContainer = document.createElement('div');
    carouselSetor.appendChild(produtoContainer);
    //o cointainer recebe a class Produto
    produtoContainer.className='Produto';
    let containerImg = document.createElement('div');
    containerImg.className='Imagem';
    //cria um elemento IMG
    let imgProduto = document.createElement('img');
    //atribui um src ao elemento img, para que possa mostrar a imagem que é endereçada pelo link  
    imgProduto.setAttribute('src', ProdutoObj.linkImg);
    //o elemento img anteriormente criado recebe uma classe
    imgProduto.setAttribute('class', 'ImagemProduto');
    //o container anteriormente criado agora possui 
    containerImg.appendChild(imgProduto);
    produtoContainer.appendChild(containerImg);
    let containerNome = document.createElement('div');
    containerNome.setAttribute('class', 'Nome');
    produtoContainer.appendChild(containerNome);
    let pNome = document.createElement('p');
    pNome.className='PNome';
    pNome.textContent=ProdutoObj.nomeProduto;
    containerNome.appendChild(pNome);
}

function criarNovoProduto(){
    let IDProduto = document.getElementById('IDProduto').value;
    let nomeProduto = document.getElementById('nomeProduto').value;
    let precoProduto = document.getElementById('precoProduto').value;
    let linkImg = document.getElementById('linkImg').value;
    let IDSetorProduto = document.getElementById('IdSetorProduto').value;
    
    let produto = new Produto(IDProduto,nomeProduto,precoProduto,linkImg,IDSetorProduto);
    MostrarNovoProduto(produto)
}

let btnMostrarMenuCriarProduto = document.getElementById('criarProduto');
btnMostrarMenuCriarProduto.addEventListener('click', ()=>{
    let menuCriarProduto = document.getElementById('criarProdutoMenu');
    menuCriarProduto.style.display='block';
})

let btnSairMenuCriarProduto = document.getElementById('btnSairCriarProdutoMenu');
btnSairMenuCriarProduto.addEventListener('click', ()=>{
    let criarProdutoMenu = document.getElementById('criarProdutoMenu');
    criarProdutoMenu.style.display='none';
})

function excluirProduto(){
    
}
