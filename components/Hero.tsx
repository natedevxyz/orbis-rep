import { Flex, Text, Image } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Flex align="center" justify="space-evenly" minW="100%" px={32} py={20}>
			<Flex flexDirection="column">
				<Text color="white" fontSize="xl">
					OrbisRep is a reputation index that harness the power of Gitcoin
					Passport verifiable credentials to fight bot accounts in social media.
				</Text>
				<Text color="white" fontSize="xl" mt={10}>
					This index and the Orbis SDK make it possible to gate content in a
					social dApp encrypting posts and messages that are only available to
					verified users.
				</Text>
			</Flex>
			<Flex justify="space-evenly" align="center" minW="30rem">
				<Image
					src="/gitcoinPassportLogo.svg"
					objectFit="contain"
					maxH="10rem"
					mx={4}
				/>
				<Text color="white" fontWeight="bold" fontSize="4xl">
					+
				</Text>
				<Image src="/orbisLogo.png" objectFit="contain" maxH="10rem" />
			</Flex>
		</Flex>
	);
};

export default Hero;
