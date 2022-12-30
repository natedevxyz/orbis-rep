import { Flex, Text, Image } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Flex align="center" justify="space-evenly" minW="100%" px={28} py={20}>
			<Flex flexDirection="column" pr={5}>
				<Text color="white" fontSize="xl">
					OrbisRep is a reputation index that aims to gate content from
					unverified users in Orbis dApps.
				</Text>
				<Text color="white" fontSize="xl" mt={10}>
					It uses Gitcoin Passport identity attestations from decentralized
					providers to reward activity in the web3 ecosystem.
				</Text>
				<Text color="white" fontSize="xl" mt={10}>
					It's powered by the Krebit platform to allow users above 50% score to
					issue and own a badge as proof of verification.
				</Text>
			</Flex>
			<Flex justify="space-evenly" align="center" minW="40rem">
				<Image
					src="/gitcoinPassportLogo.svg"
					objectFit="contain"
					maxH="10rem"
					mx={3}
				/>
				<Text color="white" fontWeight="bold" fontSize="4xl">
					+
				</Text>
				<Image src="/krebitLogo.png" objectFit="contain" maxH="11rem" />
				<Text color="white" fontWeight="bold" fontSize="4xl">
					+
				</Text>
				<Image src="/orbisLogo.png" objectFit="contain" maxH="10rem" />
			</Flex>
		</Flex>
	);
};

export default Hero;
