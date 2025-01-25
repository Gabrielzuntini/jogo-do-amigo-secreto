//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let exibirAmigos = [];

function adicionarAmigo (){
    let inserirAmigos = document.querySelector('input').value;
    inserirAmigos.innerHTML = '';
    if(inserirAmigos == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(inserirAmigos);
        limparCampo();
    }
}

inserirUsuario ()

function limparCampo(){
    let limparCampo = document.querySelector('input');
    limparCampo.value = '';
}

function verificarAmigos() {
    let verificar = document.querySelector(listaAmigos);
    variicar.innerHTML = '';

    for(let i = 0; i <= amigos.length; i++){
        let nomeItem = document.createElement('li');
        nomeItem.textContent = amigos[i];
        listaAmigos.appendChild(nomeItem);
           
    }
}

