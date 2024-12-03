// Alternar entre o modo claro e o modo escuro
const toggleButton = document.getElementById('toggle-theme');

// Verificar o estado do modo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '🌞'; // Ícone de modo claro
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // Ícone de modo escuro
    }
});

// Função de alternância de tema
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Salvar preferências no localStorage
    if (isDarkMode) {
        localStorage.setItem('dark-mode', 'enabled');
        toggleButton.textContent = '🌞'; // Ícone de modo claro
    } else {
        localStorage.removeItem('dark-mode');
        toggleButton.textContent = '🌙'; // Ícone de modo escuro
    }
});
