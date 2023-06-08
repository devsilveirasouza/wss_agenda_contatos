const form = document.getElementById('form-agenda');
const nomeContato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalContato();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (nomeContato.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    } else {
        nomeContato.push(inputNome.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContato() {
    const totalContato = calculaContato();

    document.getElementById('total-contatos').innerHTML = totalContato;
}

function calculaContato() {
    let somaDosContatos = nomeContato.length;

    return somaDosContatos;
}

