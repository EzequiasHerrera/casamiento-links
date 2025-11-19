function copyToClipboard() {
    const endereco = document.getElementById("endereco").textContent;

    navigator.clipboard.writeText(endereco)
        .then(() => alert("Endereço copiado: " + endereco))
        .catch(err => console.error("Erro ao copiar:", err));
}