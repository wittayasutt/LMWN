export const getDiscountPrice = (fullPrice: number, discountedPercent: number): number => {
	if (discountedPercent) {
		const RatioPrice = (100 - discountedPercent) / 100;
		return fullPrice * RatioPrice;
	}

	return fullPrice;
};
