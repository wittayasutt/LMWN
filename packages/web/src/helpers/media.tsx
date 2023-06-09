import { theme } from '@/styles/theme';

export const isTablet = (): boolean => {
	if (!window.matchMedia) {
		return false;
	}

	return window.matchMedia(`(min-width: ${theme.breakpoints.tablet})`).matches;
};

export const isDesktop = (): boolean => {
	if (!window.matchMedia) {
		return false;
	}

	return window.matchMedia(`(min-width: ${theme.breakpoints.desktop})`).matches;
};
