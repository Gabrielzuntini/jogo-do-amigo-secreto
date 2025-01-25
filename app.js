let amigos = [];

function adicionarAmigo(){
    let inserirAmigos = document.querySelector('input').value;
    inserirAmigos.innerHTML = '';
    
    if(inserirAmigos == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(inserirAmigos);
        limparCampo();
        verificarAmigos();
    }
}

function limparCampo(){
    let limparCampo = document.querySelector('input');
    limparCampo.value = '';
}

function verificarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let elementosDaLista = document.createElement('li');
        elementosDaLista.textContent = amigos[i];
        lista.appendChild(elementosDaLista);
        
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Se não exister nomes na lista, coloque 2 nomes para sortear")
    }
    else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let mostrarNaTela = document.getElementById('resultado');
        mostrarNaTela.innerHTML = amigoSorteado;
    }

}