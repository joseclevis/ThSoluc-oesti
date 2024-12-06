// Efeito de rolagem suave com personalização para ancoragem
const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Ajusta a posição de destino para o topo
    });
};

// Adiciona o efeito de rolagem suave para todos os links de ancoragem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// Função para animação quando as seções entram na tela
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para melhorar a performance, observamos a seção apenas uma vez
        }
    });
}, {
    root: null, // Usa o viewport como referência
    threshold: 0.1, // Dispara quando 10% da seção estiver visível
});

// Observando cada seção de interesse para animação
document.querySelectorAll('.feature').forEach(feature => {
    sectionObserver.observe(feature);
});
