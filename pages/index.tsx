import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<>
			<Head>
				<title>OrbisRep</title>
			</Head>
			<Flex bg="#24292E" h={'100vh'}>
				<Text
					fontSize="5xl"
					bgClip="text"
					bgGradient="linear(to-r, #E889B4 0%, #B56FF1 100%)"
					fontWeight="bold"
					px={3}
					letterSpacing={'-3px'}
				>
					OrbisRep
				</Text>
			</Flex>
		</>
	);
}
