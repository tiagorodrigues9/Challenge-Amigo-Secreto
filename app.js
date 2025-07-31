//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigoSecreto = [];

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function adicionarAmigo(){
    let amigoSecreto = document.querySelector('input').value;

    if(amigoSecreto == ''){
        alert('Por favor, insira um nome!')
    }else{
        listaAmigoSecreto.push(amigoSecreto)
        console.log(listaAmigoSecreto)
        limparCampo()
    }

}

function limparCampo(){
    amigoSecreto = document.querySelector('input')
    amigoSecreto.value = ''
}

function listarAmigosSecretos(){
    
}


function sortearAmigo(){

}
