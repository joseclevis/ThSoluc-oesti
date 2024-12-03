// Alternar entre o modo claro e o modo escuro
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? '🌞' : '🌙';
});
