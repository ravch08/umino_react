export async function getCategories() {
	const response = await fetch(`http://localhost:3000/categoryItems`);
	const data = await response.json();
	return data;
}

export async function getProducts() {
	const response = await fetch(`http://localhost:3000/productItems`);
	const data = await response.json();
	return data;
}

export async function getBlogs() {
	const response = await fetch(`http://localhost:3000/blogItems`);
	const data = await response.json();
	return data;
}

export async function getWhyChoose() {
	const response = await fetch(`http://localhost:3000/whyChooseItems`);
	const data = await response.json();
	return data;
}

export async function getBanners() {
	const response = await fetch(`http://localhost:3000/bannerItems`);
	const data = await response.json();
	return data;
}

export async function getSalesItems() {
	const response = await fetch(`http://localhost:3000/salesItems`);
	const data = await response.json();
	return data;
}

export async function getShippingItems() {
	const response = await fetch(`http://localhost:3000/shippingItems`);
	const data = await response.json();
	return data;
}

export async function getContactAddressItems() {
	const response = await fetch(`http://localhost:3000/contactAddressItems`);
	const data = await response.json();
	return data;
}
