import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ModalProvider } from 'styled-react-modal';

// style
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/globals';
import { light } from '@/styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={light}>
			<ModalProvider>
				<GlobalStyles />
				<App />
			</ModalProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
