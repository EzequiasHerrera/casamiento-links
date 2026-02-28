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
            <a href="${product.url}" target="_blank" class="mt-2 inline-block bg-[#EE4D2D] text-white px-4 py-2 rounded hover:bg-[#ea6347]">
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
			title: "Producto no identificado (Enlace privado o caducado)",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcrvuaapax3555.webp",
			price: "R$ 599,90",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/375177642/22394277846?d_id=0a3ea&uls_trackid=551rbe8k00qf&utm_content=G7dQNxmVAxSE5WQKu5kTYYhn8wZ",
		},
		{
			title: "Porta Chaves Parede Decorativo madeira com 3 Ganchos compacto mini",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5nbznykvkqa60.webp",
			price: "R$ 48,90",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/965653782/22693050470?d_id=0a3ea&uls_trackid=551rbgsa00qq&utm_content=G7dQNxmVB1rJ49DYtQgFzmoTUxF",
		},
		{
			title: "Producto no identificado (Enlace privado o caducado)",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsf2ra3r2fwt16.webp",
			price: "R$ 64,76",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/961638733/19599212641?d_id=0a3ea&uls_trackid=551rbi8201qf&utm_content=G7dQNxmVB45gvEYTuWbQAv6DvLo",
		},
		{
			title: "4/8 Peças Jogo Americano Kit Algodão e linho Mesa Posta Jantar",
			image: "https://down-br.img.susercontent.com/file/sg-11134201-7rbln-lnjrfs3uhv2kfb.webp",
			price: "R$26,90 - R$48,90",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/1214519029/18299307481?d_id=0a3ea&uls_trackid=551rbj6800pr&utm_content=G7dQNxmVBWZvnUU6zBtM6LCXb8b",
		},
		{
			title: "Estante Prateleira Armario Organizador Estilo Industrial Madeira MDP",
			image: "https://down-br.img.susercontent.com/file/br-11134207-81ztp-mkwtfzkcxberdb.webp",
			price: "R$ 172,90",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/687349198/58251715242?d_id=0a3ea&uls_trackid=551rbldj003u&utm_content=G7dQNxmVBU4zwxheWPVxRmFpcym",
		},
		{
			title: "Jogo de Facas Tramontina Tradicional Aço Inox e Cabos em Madeira Natural 8 Pçs",
			image: "https://down-br.img.susercontent.com/file/sg-11134201-7qvfe-ljbgobdkiubx1e.webp",
			price: "R$ 366,26",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/315971499/22191798726?d_id=0a3ea&uls_trackid=551rbnqu00qq&utm_content=G7dQNxmVBiQxoLhALMk9igrkEk7",
		},
		{
			title: "Jogo de Facas Tramontina Polywood com Lâminas em Aço Inox 6 Peças",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltn2hus1d3jd70.webp",
			price: "R$ 444,00",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/1113183521/19397658940?d_id=0a3ea&uls_trackid=551rboqs00pr&utm_content=G7dQNxmVBuPc6ECg2m1fMfERkaj",
		},
		{
			title: "Jogo Americano De Palha Redondo Para Mesa De Jantar Trançado",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx96l7f41pci32.webp",
			price: "R$21,99 - R$85,99",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/1292422542/21199323429?d_id=0a3ea&uls_trackid=551rbqi20041&utm_content=G7dQNxmVC7tFGo2xRkwd32thfK5",
		},
		{
			title: "Kit Lavabo Rústico Porta Escova Saboneteira Sustentável Luxo",
			image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mc443kjcegtj84.webp",
			price: "R$ 243,46",
			originalPrice: "N/A",
			url: "https://shopee.com.br/product/686222897/22598719416?d_id=0a3ea&uls_trackid=551rbsjn003v&utm_content=G7dQNxmVCJJ7bGPrkvYvMPAqeBy",
		},
	];

	products.forEach((product) => generateCard(product));
});
