export type PageBannerProps = {
	id?: number;
	imgSrc: string;
	title: string;
	superHeading: string;
	description?: string;
};

export type ReviewProps = {
	stars: number;
};

export type ProductCardProps = {
	id?: number;
	stars: number;
	price: number;
	cartQuantity?: number;
	priceCrossed: number | string;
	imgSrc1: string;
	imgSrc11: string;
	title: string;
	category: string[];
};

export type ProductCardPropsExtend = {
	addToCartHandler: () => void;
	addToWislistHandler: () => void;
	removeFromWishlistHandler: () => void;
};
