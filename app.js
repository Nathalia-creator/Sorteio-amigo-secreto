let listaAmigos = [];

function adicionarAmigo(){

let amigo = document.querySelector('input').value;

if (amigo == '') {
    alert ('Por favor, insira um nome!');
    document.getElementById('resultado').innerHTML += '';


} else {
    listaAmigos.push(amigo);
    document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    limparCampo();
}};


function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
};


function sortearAmigo(){

let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

if (amigoSorteado == listaAmigos) {
    alert("Não tem como fazer o sorteio com apenas uma pessoa! Por favor, adicione mais nomes.");
    return;
}

if (listaAmigos.length == 0) {
    alert('Campo vazio! Por favor, insira um nome.');
}else {

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
    document.getElementById('reiniciar').removeAttribute('disabled');
}

if (amigoSorteado == listaAmigos) {
    alert("Não tem como fazer o sorteio com apenas uma pessoa! Por favor, adicione mais nomes.");
    return;
}};


function reiniciar(){
    document.getElementById('listaAmigos').innerHTML = [''];
    listaAmigos = [];
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').setAttribute('disabled', true);
}









   


