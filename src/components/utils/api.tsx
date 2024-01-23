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
