var arr = [{ratingRevievs: "264 отзыва", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"}, 
{ratingRevievs: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!", image: "images/Samsung_Galaxy_J7	.png"}, 
{ratingRevievs: "426 отзывов", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, 
{ratingRevievs: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"}, 
{ratingRevievs: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, 
{ratingRevievs: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"}, 
{ratingRevievs: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GB Space Gray", image: "images/Apple_iPhone_5s.jpg"}, 
{ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"}, 
{ratingRevievs: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!", image: "images/Samsung_Galaxy_A5.jpg"}, 
{ratingRevievs: "1106 отзывов", price: "3 999 грн", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!", image: "images/samsung_J5.jpg"}, 
{ratingRevievs: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"}, 
{ratingRevievs: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!", image: "images/Samsung_Galaxy_S8.jpg"}, 
{ratingRevievs: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, 
{ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, 
{ratingRevievs: "709 отзывов", price: "2 799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, 
{ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, 
{ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold", image: "images/Apple_iPhone_6.png"}, 
{ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray", image: "images/Apple_iPhone_6.png"}, 
{ratingRevievs: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"}, 
{ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, 
{ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)", image: "images/Meizu_M3_Note.jpg"}, 
{ratingRevievs: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"}, 
{ratingRevievs: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"}, 
{ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black", image: "images/Apple_iPhone_7.png"}, 
{ratingRevievs: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, 
{ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"}, 
{ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"}, 
{ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"}, 
{ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"}, 
{ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"}, 
{ratingRevievs: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"}, 
{ratingRevievs: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}];

arr.sort(function(a, b){
	let ap = a.price.newUan !== undefined ? parseInt(a.price.newUan.substring(0, a.price.newUan.length - 4).replace(/\s/g, ""), 10) : parseInt(a.price.substring(0, a.price.length - 4).replace(/\s/g, ""), 10);
	let bp = b.price.newUan !== undefined ? parseInt(b.price.newUan.substring(0, b.price.newUan.length - 4).replace(/\s/g, ""), 10) : parseInt(b.price.substring(0, b.price.length - 4).replace(/\s/g, ""), 10)
	let r = parseInt(ap) - parseInt(bp);
	return r;
});

let len = Math.ceil(arr.length / 4);
let index = 0;

for(let i = 0; i < len; i++){
	let line = document.createElement("div");
	line.className = "line";
	document.body.append(line);
	
	for(let j = 0; j < 4 && index < arr.length; j++){
		let prodblock = document.createElement("div");
		prodblock.className = "product-block";
		line.appendChild(prodblock);
		
		let contentBlock = document.createElement("div");
		contentBlock.className = "content-block";
		prodblock.appendChild(contentBlock);

		let pictureBlock = document.createElement("div");
		pictureBlock.className = "picture";
		let image = document.createElement("img");
		
		if(arr[index].image !== undefined){
			image.src = arr[index].image;
		}
		else {
			image.src = "images/phone2.png";
		}
		
		pictureBlock.appendChild(image);
		contentBlock.appendChild(pictureBlock);

		let product = document.createElement("div");
		product.className = "product";
		contentBlock.appendChild(product);

		let name = document.createElement("p");
		name.className = "name";
		let textNodeName = document.createTextNode(arr[index].name);
		name.appendChild(textNodeName);
		product.appendChild(name);
		

		if(arr[index].price.newUan !== undefined){
			let newPrice = document.createElement("p");
			newPrice.className = "newPrice";
			let textNodeNewPrice = document.createTextNode(arr[index].price.newUan);
			newPrice.appendChild(textNodeNewPrice);
			product.appendChild(newPrice);

			let oldPrice = document.createElement("p");
			oldPrice.className = "oldPrice";
			let textNodeOldPrice = document.createTextNode(arr[index].price.oldUan);
			oldPrice.appendChild(textNodeOldPrice);
			product.appendChild(oldPrice);
		}
		else {
			let price = document.createElement("p");
			price.className = "price";
			let textNodePrice = document.createTextNode(arr[index].price);
			price.appendChild(textNodePrice);
			product.append(price);
		}

		let rating = document.createElement("p");
		rating.className = "rating";
		let ratingTextNode = document.createTextNode(arr[index].ratingRevievs);
		rating.appendChild(ratingTextNode);
		product.appendChild(rating);

		index++;	
	}
}