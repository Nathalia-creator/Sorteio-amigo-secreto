let listaAmigos = [];
document.getElementById('resultado').innerHTML += "";
document.getElementById('reiniciar').removeAttribute(':hover');


function adicionarAmigo(){


let amigo = document.querySelector('input').value;


if (amigo == '') {
    alert ('Por favor, insira um nome!');
    document.getElementById('resultado').innerHTML += '';


} else {
    listaAmigos.push(amigo);
    document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    limparCampo();
    console.log(listaAmigos);
}};


function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
};


function sortearAmigo(){


if (listaAmigos.length == 0) {
    alert('Campo vazio! Por favor, insira um nome.');


}else {

let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById('resultado').innerHTML += `Amigo secreto: ${amigoSorteado} `;
    console.log(document.getElementById('resultado').innerHTML);
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('reiniciar').removeAttribute('hover');
   
}};

function reiniciar(){
    document.getElementById('listaAmigos').innerHTML = [''];
    listaAmigos = [];
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


// desabilitar botão reiniciar







   


