const NOME = "Samuel Nadone";
let tituloProfissional = "Desenvolvedor";
let minhaBio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a";
let anoFormatura = 2026;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let dataAtual = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = dataAtual.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = dataAtual.getFullYear(); // Ano atual
let diaAtual = dataAtual.getDate(); // Dia atual

let indefinido;
let nulo = null;
let curso = {
    nome: "Desenvolvedor de sistemas",
    semestre: 3,
    disciplinaAtual: "Aluno"
}



console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = anoFormatura;
document.getElementById("anoIngresso").innerText = "Ano de Ingresso: " + anoIngresso;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;



let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo para formatura: `;
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo para formatura: ${anoFormatura - anoAtual} ano /`;
} else {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo para formatura: ${anoFormatura - anoAtual} anos /`;
}


if (mesFormatura - mesAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura2").innerText = `- /`;
} else if (mesFormatura - mesAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura2")
    .innerText = ` ${mesFormatura - mesAtual} mes /`;
} else {
    document.getElementById("tempoRestanteParaFormatura2")
    .innerText = ` ${mesFormatura - mesAtual} meses /`;
}

if (diaFormatura - diaAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura3").innerText = `-`;
} else if (diaFormatura - diaAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura3")
    .innerText = `${diaFormatura - diaAtual} dia`;
} else {
    document.getElementById("tempoRestanteParaFormatura3")
    .innerText = `${diaFormatura - diaAtual} dias`;
}



















// Funcionalidade do botão "Sobre mim"
const botao = document.querySelector('.botao');
botao.addEventListener('click', function() {
    const informacoes = document.querySelector('.informacoes');
    informacoes.scrollIntoView({ behavior: 'smooth' });
});


