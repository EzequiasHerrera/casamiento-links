// Esta función crea una card desde una URL
async function generateCard(product) {
	try {
		const image = product.image;
		const price = product.price || product.originalPrice;
		const card = document.createElement("div");
		card.className = "bg-white shadow-md rounded-lg p-4 max-w-sm";

		card.innerHTML = `
        <img src="${image}" alt="Produto" class="w-full h-48 object-cover rounded-2xl" />
        <div class="mt-4">
            <p class="text-lg font-semibold text-gray-800">
                ${price}
            </p>
            <a href="${product.url}" target="_blank" class="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Presentear
            </a>
        </div>
    `;

		document.getElementById("product-container").appendChild(card);
	} catch (error) {
		console.error("Erro ao carregar o produto:", error);
	}
}

// Esta función se ejecuta cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
	const products = [
		{
			image: "https://static-images-now.westwing.com.br/s/140542-4598-359271-1-product2.jpg",
			price: "R$ 79,90",
			originalPrice: "R$ 84,90",
			url: "http://www.westwing.com.br/prato-para-bolo-garden-140542.html?simple=DEQ24SCA27898-172953",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/104136-6392-964921-1-product2.jpg",
			price: "R$ 24,90",
			originalPrice: "R$ 42,90",
			url: "https://www.westwing.com.br/rodo-de-pia-dobravel-com-cabo-em-bambu-focis-104136.html?simple=DEQ23LYO57918-129469",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/69409-0268-31688-1-product2.jpg",
			price: "R$ 47,90",
			originalPrice: "R$ 52,90",
			url: "https://www.westwing.com.br/balde-de-gelo-esplanada-69409.html?simple=DEQ23NOV48446-88430",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/130768-3223-151261-1-product2.jpg",
			price: "R$ 84,90",
			originalPrice: "R$ 92,90",
			url: "https://www.westwing.com.br/garrafa-termica-com-termometro-nordica-bege-130768.html?simple=DEQ24WOL17641-162151",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/230568-3142-444892-1-product2.jpg",
			price: "R$ 97,90",
			originalPrice: "R$ 109,90",
			url: "https://www.westwing.com.br/prato-para-servir-maca-230568.html?simple=DEQ24CER61532-298444",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/140685-8378-001371-1-product2.jpg",
			price: "R$ 32,90",
			originalPrice: "R$ 37,90",
			url: "http://www.westwing.com.br/porta-guardanapo-valandur-grajau-140685.html",
		},
		
		{
			image: "https://static-images-now.westwing.com.br/s/314971-9549-237804-1-product2.jpg",
			price: "R$ 57,90",
			originalPrice: "R$ 84,90",
			url: "https://www.westwing.com.br/capa-de-almofada-retangular-estampada-com-babados-vichy-elena-verde-314971.html?simple=DEQ25WES26747-408732",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/314974-8817-537804-1-product2.jpg",
			price: "R$ 59,90",
			originalPrice: "R$ 84,90",
			url: "https://www.westwing.com.br/capa-de-almofada-estampada-com-babados-vichy-elena-verde-314974.html?simple=DEQ25WES56333-408735",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/340403-0564-509444-1-product2.jpg",
			price: "R$ 79,90",
			originalPrice: "R$ 119,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-nice-peach-colorido-340403.html?simple=DEQ25WES18735-444905",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/340392-0412-398444-1-product2.jpg",
			price: "R$ 87,90",
			originalPrice: "R$ 119,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-trama-azul-340392.html?simple=DEQ25WES83552-444893",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/340404-0596-709444-1-product2.jpg",
			price: "R$ 87,90",
			originalPrice: "R$ 119,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-flower-power-colorido-340404.html?simple=DEQ25WES90328-444907",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/138531-2607-747071-1-product2.jpg",
			price: "R$ 79,90",
			originalPrice: "R$ 119,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-tulipas-138531.html?simple=DEQ24WES74871-170747",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/340395-0445-698444-1-product2.jpg",
			price: "R$ 87,90",
			originalPrice: "R$ 119,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-taty-lavanda-colorido-340395.html?simple=DEQ25WES18101-444896",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/308759-4775-276104-1-product2.jpg",
			price: "R$ 157,90",
			originalPrice: "R$ 287,90",
			url: "https://www.westwing.com.br/jogo-de-tacas-para-vinho-buurano-future-308759.html?simple=DEQ25LHE30649-401672",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/230622-3395-894892-1-product2.jpg",
			price: "R$ 64,90",
			originalPrice: "R$ 79,90",
			url: "https://www.westwing.com.br/prato-para-servir-morango-230622.html?simple=DEQ24CER33044-298498",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/142557-0608-212571-1-product2.jpg",
			price: "R$ 164,90",
			originalPrice: "R$254,90",
			url: "https://www.westwing.com.br/jogo-de-cumbucas-organico-echo-branco-142557.html?simple=DEQ24POR28114-175212",
		},
	];

	products.forEach((product) => generateCard(product));
});
