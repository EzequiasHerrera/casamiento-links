function copyToClipboard() {
    const endereco = document.getElementById("endereco").textContent;

    navigator.clipboard.writeText(endereco)
        .then(() => {
            const toast = document.createElement("div");
            toast.textContent = "Endereço copiado";
            toast.className = "fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg text-sm font-medium z-50";

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 2000);
        })
        .catch(err => console.error("Erro ao copiar:", err));
}