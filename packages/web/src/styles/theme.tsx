export const theme = {
	colors: {
		grey: '#CACACA',
		grey2: '#A3A3A3',
		grey3: '#8C8C8C',
		primary: '#39DC00',
		white: '#FFFFFF',
	},
	breakpoints: {
		tablet: '768px',
		desktop: '1024px',
	},
};

export const light = {
	...theme,
	colors: {
		...theme.colors,
		background: '#FFFFFF',
		text: '#000000',
	},
};

export const dark = {
	...theme,
	colors: {
		...theme.colors,
		background: '#000000',
		text: '#FFFFFF',
	},
};
