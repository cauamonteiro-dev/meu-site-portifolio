// =========================
// MENU RESPONSIVO
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});


// Fecha o menu ao clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});


// =========================
// MODO CLARO / ESCURO
// =========================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☾";
        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );
    } else {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );
    }

});


// =========================
// FORMULÁRIO
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    formMessage.textContent =
        "Mensagem preparada! Este formulário é apenas demonstrativo.";

    contactForm.reset();

});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();