const NOME = "Samuel Nadone";
let tituloProfissional = "Desenvolvedor";
let minhaBio = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a";
let anoFormatura = 2026;
let anoIngresso = 2025;
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

