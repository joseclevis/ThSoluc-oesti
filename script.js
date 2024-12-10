// Animação de Detalhes
function showDetails(serviceName) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${serviceName}</h2>
            <p>Mais informações sobre o serviço: <strong>${serviceName}</strong>.</p>
            <button onclick="closeModal()" class="btn">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector(".modal");
    if (modal) modal.remove();
}
