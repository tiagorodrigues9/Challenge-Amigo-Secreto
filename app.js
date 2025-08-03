let listaAmigoSecreto = [];

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
    if (listaAmigoSecreto.length === 0) {
        alert('A lista está vazia!');
    } else {
        const indiceAleatorio = Math.floor(Math.random() * listaAmigoSecreto.length);
        const amigoSorteado = listaAmigoSecreto[indiceAleatorio];

        listaAmigoSecreto.splice(indiceAleatorio, 1);
        document.getElementById('listaAmigos').innerHTML = '';

        let resultadoSorteio = document.getElementById('resultado');
        resultadoSorteio.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
    }
}

