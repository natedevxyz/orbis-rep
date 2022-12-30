import Head from 'next/head';
import { Flex, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount, useEnsAvatar, useNetwork } from 'wagmi';
import passportService from '../services/passport';
import orbisService from '../services/orbis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stamps from '../components/Stamps';
import Footer from '../components/Footer';
import Progress from '../components/Progress';

export default function Home() {
	const { address, isConnected } = useAccount();
	const { data, isError } = useEnsAvatar({
		address: address,
	});
	const { chain } = useNetwork();
	const [user, setUser] = useState('');
	const [score, setScore] = useState(0);
	const [stamps, setStamps] = useState([]);
	const [avatar, setAvatar] = useState('');
	const [chainId, setChainId] = useState(0);

	const toast = useToast({
		title: 'Badge issued',
		description: 'You can check it on Krebit.id',
		status: 'success',
		duration: 10000,
		isClosable: true,
	});

	const loadAvatar = () => {
		if (!isError) {
			setAvatar(data!);
		}
	};
	const login = async () => {
		setUser(await orbisService.connect());
		setScore(await passportService.getScore(address!));
		setStamps(await passportService.getPassport(address!));
	};
	const logout = async () => {
		const { defaultUser, defaultScore } = await orbisService.logout();
		setUser(defaultUser);
		setScore(defaultScore);
	};

	useEffect(() => {
		if (isConnected) {
			login();
			loadAvatar();
		} else {
			logout();
		}
	}, [isConnected]);

	useEffect(() => {
		if (chain) {
			setChainId(chain!.id);
		}
	}, [chain]);

	return (
		<>
			<Head>
				<title>OrbisRep</title>
			</Head>
			<Flex
				bg="#24292E"
				h={'100vh'}
				flexDirection="column"
				align="center"
				justify="space-between"
			>
				<Navbar user={user} />
				{user !== '' ? (
					<Progress
						avatarUrl={avatar!}
						address={address!}
						score={score}
						chainId={chainId}
						toast={toast}
					/>
				) : (
					<Hero />
				)}
				<Stamps user={user} stamps={stamps} />
				<Footer />
			</Flex>
		</>
	);
}
