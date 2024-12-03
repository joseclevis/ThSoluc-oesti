// Função para ativar o menu responsivo
function toggleMenu() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
}

// Animação de entrada ao carregar a página
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in');
        }, index * 300); // Atraso progressivo para cada elemento
    });
});

// Animação de rolagem para mostrar elementos ao rolar a página
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Validar o formulário de contato
function validateForm(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    }
}

// Adiciona evento de submit no formulário
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);
