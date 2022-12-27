import { Flex, Text, Image, HStack, Box } from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';

interface NavbarProps {
	user: string;
}

const Navbar = ({ user }: NavbarProps) => {
	return (
		<Flex justify="space-between" align="center" px={5} minW="100%">
			<Text
				fontSize="5xl"
				bgClip="text"
				bgGradient="linear(to-r, #E889B4 0%, #B56FF1 100%)"
				fontWeight="bold"
				pr={1}
				letterSpacing={'-3px'}
			>
				OrbisRep
			</Text>
			{user !== '' && (
				<HStack mt={4} pr={10}>
					<Text color="white">Connected to Orbis</Text>
					<Image src="/orbisLogo.png" boxSize="20px"></Image>
				</HStack>
			)}
			<Box mt={2} mr={2}>
				<Web3Button icon="hide" />
			</Box>
		</Flex>
	);
};

export default Navbar;
