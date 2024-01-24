import React from "react";
import { v4 as uuidv4 } from "uuid";

import { ReviewProps } from "../../types/types";

const Review = (props: ReviewProps) => {
	const reviewArr: JSX.Element[] = [];

	const star = (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
			<g fill="black">
				<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
			</g>
		</svg>
	);

	const starOutline = (
		<svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
			<g fill="black">
				<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
			</g>
		</svg>
	);

	const reviews = (num: number) => {
		for (let i = 0; i < num; i++) reviewArr[i] = star;
		for (let i = num; i < 5; i++) reviewArr[i] = starOutline;
		return reviewArr;
	};

	reviews(props.stars);

	return (
		<div className="review">
			{reviewArr.map((item) => React.cloneElement(item, { key: uuidv4() }))}
		</div>
	);
};

export default Review;
