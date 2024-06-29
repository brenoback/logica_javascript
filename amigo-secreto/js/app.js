// Declarando a lista de amigos vazia
let amigos = []

// Função que verifica se há um nome sendo adicionado, verifica também se já existe esse nome e posteriormente o adiciona a lista
function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!')
        return
    }

    if (amigos.includes(amigo.value)) {
        alert('Esse nome já está na lista! Insira um sobrenome ou coloque outro.')
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent += ', ' + amigo.value;
    }
    amigo.value = '';
}

// Sorteia para cada membro da lista um outro membro e verifica se tem no minimo quatro pessoas inseridas
function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    if (amigos.length < 4) {
        alert('O número mínimo de pessoas para realizar o sorteio é quatro!')
        return
    }

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

// Funcao que embaralha a lista de amigos
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Funcao que reinicia o sorteador
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}
