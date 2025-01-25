let amigos = [];

function adicionarAmigo(amigos){
    let inserirAmigos = document.querySelector('input').value;
    inserirAmigos.innerHTML = '';
    
    if(inserirAmigos == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(inserirAmigos);
        limparCampo();
    }
}

function limparCampo(){
    let limparCampo = document.querySelector('input');
    limparCampo.value = '';
}