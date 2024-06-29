// Função checa qual o tipo de ingresso a pessoa deseja comprar e chama a respectiva função que realiza a atividade

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

}

// Funções checam se a quantidade inserida é valida, checam se há ingressos disponíveis e avisam se a compra foi bem sucedida ou se não há ingressos e quantos restam

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Você esqueceu de inserir a quantidade! Só são permitidos valores maiores ou igual a um, insira e tente novamente.");
        return;
    }

    if (quantidade > quantidadePista) {
        if (quantidadePista > 0) {
            alert(`Não há essa quantidade de ingressos disponíveis para a Pista! Restam apenas ${quantidadeInferior} ingresso(s)!`);
        } else { alert('Ingressos para a Pista esgotados!'); }
    } else {
        quantidadePista -= quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista
        alert('Compra realizada com sucesso! Aproveite o show :)');
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = document.getElementById('qtd-inferior').textContent;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Você esqueceu de inserir a quantidade! Só são permitidos valores maiores ou igual a um, insira e tente novamente.");
        return;
    }

    if (quantidade > quantidadeInferior) {
        if (quantidadeInferior > 0) {
            alert(`Não há essa quantidade de ingressos disponíveis para as cadeiras inferiores! Restam apenas ${quantidadeInferior} ingresso(s)!`);
        } else { alert('Ingressos para as cadeiras inferiores esgotados!'); }
    } else {
        quantidadeInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso! Aproveite o show :)')
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = document.getElementById('qtd-superior').textContent;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Você esqueceu de inserir a quantidade! Só são permitidos valores maiores ou igual a um, insira e tente novamente.");
        return;
    }

    if (quantidade > quantidadeSuperior) {
        if (quantidadeSuperior > 0) {
            alert(`Não há essa quantidade de ingressos disponíveis para as cadeiras superiores! Restam apenas ${quantidadeInferior} ingresso(s)!`);
        } else { alert('Ingressos para as cadeiras superiores esgotados!'); }
    } else {
        quantidadeSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso! Aproveite o show :)')
    }
}