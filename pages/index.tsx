import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAccount, useEnsAvatar } from 'wagmi';
import passportService from '../services/passport';
import orbisService from '../services/orbis';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stamps from '../components/Stamps';
import Footer from '../components/Footer';
import Progress from '../components/Progress';

export default function Home() {
	const { address, isConnected } = useAccount();
	const { data } = useEnsAvatar({
		address: address,
	});
	const [user, setUser] = useState('');
	const [score, setScore] = useState(0);
	const [stamps, setStamps] = useState([]);

	const avatarUrl = data;

	const loadConnection = async () => {
		setUser(await orbisService.connect());
	};
	const loadScore = async () => {
		setScore(await passportService.getScore(address!));
	};
	const loadStamps = async () => {
		setStamps(await passportService.getPassport(address!));
	};

	useEffect(() => {
		if (isConnected) {
			loadConnection();
			loadStamps();
			loadScore();
		} else {
			setUser('');
			setScore(0);
		}
	}, [isConnected]);

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
					<Progress avatarUrl={avatarUrl!} score={score} />
				) : (
					<Hero />
				)}
				<Stamps user={user} stamps={stamps} />
				<Footer />
			</Flex>
		</>
	);
}
