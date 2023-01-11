var resultado = document.querySelector('.result');
var confirmar = document.querySelector('.igual');

function insert(valor) {
    resultado.innerHTML += valor;
};

function clean() {
    resultado.innerHTML = ' ';
    var corFundo = window.document.body
    corFundo.style.backgroundColor = '#22c1c3'
};

function backspace() {
    if (resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    };
};

function confirma() {
    if (resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }

    if (resultado.innerHTML % 2 === 0) {
        var corFundo = window.document.body
        corFundo.style.backgroundColor = '#420ebb'
    } else {
        var corFundo = window.document.body
        corFundo.style.backgroundColor = '#0ebb68'
    }

}

