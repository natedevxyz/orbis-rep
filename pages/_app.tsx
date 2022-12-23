import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<ColorModeProvider
				options={{
					initialColorMode: 'dark',
					useSystemColorMode: false,
				}}
			>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}
