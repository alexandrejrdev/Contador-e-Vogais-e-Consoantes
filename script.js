let inputTexto = document.getElementById("meuTexto")

let qtdPalavras = document.getElementById("qtdPalavras")
let qtdVogais = document.getElementById("qtdVogais")
let qtdConsoantes = document.getElementById("qtdConsoantes")

let textoCapturado = '';

inputTexto.addEventListener('input', (event) => {
    textoCapturado = event.target.value;
})

function resultado () {
    const textoCapturadoSemEspaco = textoCapturado.split(" ").join("");
    qtdPalavras.textContent = textoCapturadoSemEspaco.length;
    const vogais = textoCapturadoSemEspaco.match(/[aeiouáàãâéêèíìóòôõúùü]/gi);
    qtdVogais.textContent = vogais.length;
    const consoante = textoCapturadoSemEspaco.length - vogais.length;
    qtdConsoantes.textContent = consoante
}

function limparText () {
    document.getElementById("meuTexto").value = " ";
    document.getElementById("qtdPalavras").textContent = "0";
    document.getElementById("qtdVogais").textContent = "0";
    document.getElementById("qtdConsoantes").textContent = "0";
}












