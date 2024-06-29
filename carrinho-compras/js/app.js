//Criando a variavel de total e zerando todos os campos para inicializar o carrinho
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ''
document.getElementById('valor-total').innerHTML = 'R$0,00'

function adicionar() {

    //Recuperando as variaveis necessarias do codigo HTML
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];

    //Recuperando a quantidade de produtos do codigo HTML e calculando o valor do subtotal de cada um
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;

    //Validacao para checar se o campo quantidade e maior ou igual a um
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Você esqueceu de inserir a quantidade! Só são permitidos valores maiores ou igual a um, insira e tente novamente.");
        return;
    }

    //Alterando a lista de produtos no carrinho e adicionando ao valor total
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    totalGeral += preco

    //Alterando o campo de valor total do carrinho e zerando a quantidade para uma nova adicao de produto
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    //Limpando todos os campos do carrinho e atualizando o valor total para zero
    document.getElementById('lista-produtos').innerHTML = ''
    document.getElementById('valor-total').innerHTML = 'R$0,00'
    totalGeral = 0;
}