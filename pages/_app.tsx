import type { AppProps } from 'next/app';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import customTheme from '../styles/theme';
import {
	EthereumClient,
	modalConnectors,
	walletConnectProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

const chains = [mainnet, polygon];
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

const { provider } = configureChains(chains, [
	walletConnectProvider({ projectId: projectId! }),
]);

const wagmiClient = createClient({
	autoConnect: true,
	connectors: modalConnectors({ appName: 'OrbisRep', chains }),
	provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ChakraProvider resetCSS theme={customTheme}>
				<ColorModeProvider
					options={{
						initialColorMode: 'dark',
						useSystemColorMode: false,
					}}
				>
					<WagmiConfig client={wagmiClient}>
						<Component {...pageProps} />
					</WagmiConfig>
				</ColorModeProvider>
			</ChakraProvider>

			<Web3Modal
				projectId={projectId}
				ethereumClient={ethereumClient}
				themeMode="dark"
				themeColor="purple"
			/>
		</>
	);
}
