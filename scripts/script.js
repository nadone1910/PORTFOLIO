const NOME = "Samuel Nadone";
let tituloProfissional = "Desenvolvedor";
let minhaBio = "Sou desenvolvedor focado em criar interfaces modernas, rápidas e intuitivas. Busco sempre desenvolver projetos com design profissional, experiência fluida e alto nível de performance, unindo criatividade, estética e funcionalidade em cada detalhe.";
let anoFormatura = 2026;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();

let indefinido;
let nulo = null;

let curso = {
    nome: "Desenvolvedor de sistemas",
    semestre: 3,
    disciplinaAtual: "Aluno"
};

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;


// ==========================
// FUNCIONALIDADE BOTÃO SOBRE
// ==========================

const botao = document.querySelector('.botao');

if (botao) {
    botao.addEventListener('click', function() {
        const informacoes = document.querySelector('.informacoes');

        if (informacoes) {
            informacoes.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}


// ==========================
// MODAL CONTATO
// ==========================

const modalOverlay = document.getElementById("modalOverlay");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

if (openModal) {
    openModal.addEventListener("click", () => {
        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    });
}


// ==========================
// SKILLS
// ==========================

const skills = [
    { nome: "HTML", nivel: 95 },
    { nome: "CSS", nivel: 90 },
    { nome: "JavaScript", nivel: 60 },
    { nome: "Node.js", nivel: 60 }
];

const container = document.querySelector(".skills-container");

if (container) {

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

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");

        });

        container.appendChild(card);

    });

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

}


// ==========================
// ANIMAÇÕES
// ==========================

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


// ==========================
// EMAILJS
// ==========================

emailjs.init({
    publicKey: "4X7N1vdBb5EOsb5Xg",
});

const form = document.getElementById("contact-form");

if (form) {

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

}