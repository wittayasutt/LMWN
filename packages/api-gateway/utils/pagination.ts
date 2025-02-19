export const filterItems = <T>(items: T[], page: number, itemPerPage: number): T[] => {
	const from = page * itemPerPage;
	const to = (page + 1) * itemPerPage;
	return items?.filter((_, index) => index >= from && index < to);
};
