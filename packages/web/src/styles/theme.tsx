export const theme = {
	colors: {
		primary: '#0EC963',
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
