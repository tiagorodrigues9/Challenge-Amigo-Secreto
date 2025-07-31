let listaAmigoSecreto = [];

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let amigoSecreto = document.querySelector('input').value;

    if (amigoSecreto == '') {
        alert('Por favor, insira um nome!');
    } else {
        listaAmigoSecreto.push(amigoSecreto);
        console.log(listaAmigoSecreto);
        limparCampo();
        listarAmigosSecretos();
    }
}

function limparCampo() {
    let amigoSecreto = document.querySelector('input');
    amigoSecreto.value = '';
}

// Atualiza a lista na tela
function listarAmigosSecretos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigoSecreto.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigoSecreto[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {

}
