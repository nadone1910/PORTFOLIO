const NOME = "Samuel Nadone";
let tituloProfissional = "Desenvolvedor";
let minhaBio = "Sou desenvolvedor focado em criar interfaces modernas, rápidas e intuitivas. Busco sempre desenvolver projetos com design profissional, experiência fluida e alto nível de performance, unindo criatividade, estética e funcionalidade em cada detalhe.";
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






emailjs.init("4X7N1vdBb5EOsb5Xg");

const modalOverlay = document.getElementById("modalOverlay");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const button = document.querySelector(".submitBtn");

    button.innerText = "Enviando...";
    button.disabled = true;

    emailjs.sendForm(
        "service_l5jn30y",
        "template_fpik5hd",
        this
    )

    .then(() => {

        button.innerText = "Mensagem enviada!";

        form.reset();

        setTimeout(() => {

            modalOverlay.classList.remove("active");

            button.innerText = "Enviar mensagem";
            button.disabled = false;

            document.body.style.overflow = "auto";

        }, 2000);

    })

    .catch((error) => {

        console.log(error);

        button.innerText = "Erro ao enviar";

        setTimeout(() => {

            button.innerText = "Enviar mensagem";
            button.disabled = false;

        }, 2000);

    });

});









const githubContainer = document.getElementById("githubRepos");

fetch("https://api.github.com/users/nadone1910/repos")

.then(response => response.json())

.then(data => {

    const repos = data
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 4);

    repos.forEach(repo => {

        githubContainer.innerHTML += `

        <div class="github-card">

            <div class="github-top">

                <i class="fa-brands fa-github"></i>

                <span class="language">
                    ${repo.language || "Projeto"}
                </span>

            </div>

            <h3>${repo.name}</h3>

            <p>
                ${repo.description || "Projeto desenvolvido para estudos e evolução prática no desenvolvimento front-end."}
            </p>

            <a 
                href="${repo.html_url}" 
                target="_blank"
                class="github-link"
            >
                Ver repositório
            </a>

        </div>

        `;

    });

});
