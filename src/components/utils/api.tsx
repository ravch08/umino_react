export async function getCategories() {
	try {
		const response = await fetch(`http://localhost:3000/categoryItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getProducts() {
	try {
		const response = await fetch(`http://localhost:3000/productItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getBlogs() {
	try {
		const response = await fetch(`http://localhost:3000/blogItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getWhyChoose() {
	try {
		const response = await fetch(`http://localhost:3000/whyChooseItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getBanners() {
	try {
		const response = await fetch(`http://localhost:3000/bannerItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getSalesItems() {
	try {
		const response = await fetch(`http://localhost:3000/salesItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getShippingItems() {
	try {
		const response = await fetch(`http://localhost:3000/shippingItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function getContactAddressItems() {
	try {
		const response = await fetch(`http://localhost:3000/contactAddressItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
