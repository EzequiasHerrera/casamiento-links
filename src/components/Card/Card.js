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
			image: "https://static-images-now.westwing.com.br/s/37740-4536-93094-1-productmobile.jpg",
			price: "R$ 97,90",
			originalPrice: "R$ 229,90",
			url: "https://www.westwing.com.br/garrafa-termica-para-servir-vivien-marrom-37740.html?simple=DEQ21BTC79687-49039?utm_source=sharing_widget",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/278644-6678-982363-1-product2.jpg",
			price: "R$ 332,90",
			originalPrice: "R$ 649,90",
			url: "https://www.westwing.com.br/jogo-de-facas-com-cepo-kenya-278644.html?simple=DEQ24KEN10382-363289?utm_source=sharing_widget",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/127818-1038-966851-1-product2.jpg",
			price: "R$ 494,90",
			originalPrice: "R$ 729,90",
			url: "https://www.westwing.com.br/aparelho-de-jantar-valencia-127818.html?simple=DEQ24ALL64646-158669?utm_source=sharing_widget",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/327262-5376-318524-1-product2.jpg",
			price: "R$ 34,90",
			originalPrice: "R$ 52,90",
			url: "https://www.westwing.com.br/porta-talheres-barbante-327262.html?simple=DEQ25WOL63219-425813?utm_source=sharing_widget",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/57499-0229-49447-1-product2.jpg",
			price: "R$ 34,90",
			originalPrice: "R$ 49,90",
			url: "https://www.westwing.com.br/porta-guardanapo-valandur-taci-57499.html?simple=DEQ23WOL31032-74494?utm_source=sharing_widget",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/67368-0864-85268-1-product2.jpg",
			price: "R$ 89,90",
			originalPrice: "R$ 112,90",
			url: "https://www.westwing.com.br/jogo-de-potes-com-tampas-noy-coloridos-67368.html?simple=DEQ23BTC69870-86258",
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
			image: "https://static-images-now.westwing.com.br/s/86667-6055-887801-1-product2.jpg",
			price: "R$ 69,90",
			originalPrice: "R$ 99,90",
			url: "https://www.westwing.com.br/capa-de-almofada-com-franjas-galah-verde-86667.html?simple=DEQ23WES26017-108788",
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
			image: "https://static-images-now.westwing.com.br/s/340396-0456-798444-1-product2.jpg",
			price: "R$ 89,90",
			originalPrice: "R$ 129,90",
			url: "https://www.westwing.com.br/tapete-de-banheiro-shower-colorido-340396.html?simple=DEQ25WES32320-444897",
		},
		{
			image: "https://static-images-now.westwing.com.br/s/259780-2685-026833-1-product2.jpg",
			price: "R$ 37,90",
			originalPrice: "R$ 52,90",
			url: "https://www.westwing.com.br/jogo-de-balde-para-gelo-e-pegador-diamond-259780.html?simple=DEQ24LYO73929-338620",
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
			image: "https://static-images-now.westwing.com.br/s/76775-7083-74869-1-product2.jpg",
			price: "R$ 139,90",
			originalPrice: "R$ 229,90",
			url: "https://www.westwing.com.br/jogo-de-bowls-organico-arauco-verde-76775.html?simple=DEQ23POR39642-96847",
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
