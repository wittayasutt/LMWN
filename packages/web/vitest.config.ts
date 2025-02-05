import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		include: ['**/*.spec.ts', '**/*.spec.tsx'],
		setupFiles: './src/tests/setup.js',
	},
});
