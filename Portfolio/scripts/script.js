const NOME = "Samuel Nadone";
let tituloProfissional = "Desenvolvedor";
let minhaBio = "Sou desenvolvedor focado em criar interfaces modernas, rápidas e intuitivas. Tenho experiência com HTML, CSS e JavaScript, buscando sempre entregar projetos com design profissional e alto nível de performance.";
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


const modal = document.getElementById("modal")
const btn = document.getElementById("openModal")

btn.onclick = () => {
  modal.style.display = "flex"
}




const skills = [
  { nome: "HTML", nivel: 95 },
  { nome: "CSS", nivel: 90 },
  { nome: "JavaScript", nivel: 60 },
  { nome: "Node.js", nivel: 60 }
];

const container = document.querySelector(".skills-container");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.classList.add("skill-card");

  card.innerHTML = `
    <div class="skill-content">
      <div class="skill-header">
        <span>${skill.nome}</span>
        <span>${skill.nivel}%</span>
      </div>
      <div class="bar">
        <div class="progress" data-width="${skill.nivel}"></div>
      </div>
    </div>
    <div class="glow"></div>
  `;

  // efeito glow seguindo mouse
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });

  container.appendChild(card);
});

// animação ao aparecer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll(".progress").forEach(bar => {
        bar.style.width = bar.dataset.width + "%";
      });
    }
  });
});

observer.observe(container);

     




const elementos = document.querySelectorAll('.perfil, .informacoes, .projeto');

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elementos.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s";
  observer2.observe(el);
});



