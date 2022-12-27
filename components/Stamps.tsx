import { Flex, Text, Image, HStack } from '@chakra-ui/react';

interface StampsProps {
	user: string;
	stamps: string[];
}

const Stamps = ({ user, stamps }: StampsProps) => {
	const ethTx = stamps.filter(x => x === 'FirstEthTxnProvider').length === 1;
	const ens = stamps.filter(x => x === 'Ens').length === 1;
	const nft = stamps.filter(x => x === 'NFT').length === 1;
	const poap = stamps.filter(x => x === 'POAP').length === 1;

	return (
		<HStack align="center" justify="center" minW="100%" spacing={10} mt={10}>
			<Flex
				flexDirection="column"
				minH={32}
				minW={24}
				justify="space-evenly"
				align="center"
				rounded="xl"
				px={1}
				borderWidth="6px"
				borderColor={user === '' ? '#C0FDFF' : ethTx ? '#C0FDFF' : 'gray.200'}
				bg="white"
			>
				<Image
					src="/ethereumStampIcon.svg"
					objectFit="contain"
					maxH="3rem"
					filter={
						user === ''
							? 'grayscale(0%)'
							: ethTx
							? 'grayscale(0%)'
							: 'grayscale(100%)'
					}
				/>
				<Flex flexDirection="column">
					<Text fontSize="xs" color="black">
						30 days old
					</Text>
					<Text fontSize="xs" color="black">
						transaction
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				minH={32}
				minW={24}
				justify="space-evenly"
				align="center"
				rounded="xl"
				px={1}
				borderWidth="6px"
				borderColor={user === '' ? '#C0FDFF' : ens ? '#C0FDFF' : 'gray.200'}
				bg="white"
			>
				<Image
					src="/ensStampIcon.svg"
					objectFit="contain"
					maxH="3rem"
					filter={
						user === ''
							? 'grayscale(0%)'
							: ens
							? 'grayscale(0%)'
							: 'grayscale(100%)'
					}
				/>
				<Flex flexDirection="column" align="center">
					<Text fontSize="xs" color="black">
						Have an
					</Text>
					<Text fontSize="xs" color="black">
						.eth name
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				minH={32}
				minW={24}
				justify="space-evenly"
				align="center"
				rounded="xl"
				px={1}
				borderWidth="6px"
				borderColor={user === '' ? '#C0FDFF' : nft ? '#C0FDFF' : 'gray.200'}
				bg="white"
			>
				<Image
					src="/nftStampIcon.svg"
					objectFit="contain"
					maxH="5rem"
					filter={
						user === ''
							? 'grayscale(0%)'
							: nft
							? 'grayscale(0%)'
							: 'grayscale(100%)'
					}
				/>
				<Flex flexDirection="column" align="center">
					<Text fontSize="xs" color="black">
						Hold at
					</Text>
					<Text fontSize="xs" color="black">
						least 1 NFT
					</Text>
				</Flex>
			</Flex>
			<Flex
				flexDirection="column"
				minH={32}
				minW={24}
				justify="space-evenly"
				align="center"
				rounded="xl"
				px={1}
				borderWidth="6px"
				borderColor={user === '' ? '#C0FDFF' : poap ? '#C0FDFF' : 'gray.200'}
				bg="white"
			>
				<Image
					src="/poapStampIcon.svg"
					objectFit="contain"
					maxH="5rem"
					filter={
						user === ''
							? 'grayscale(0%)'
							: poap
							? 'grayscale(0%)'
							: 'grayscale(100%)'
					}
				/>
				<Flex flexDirection="column" align="center">
					<Text fontSize="xs" color="black">
						15 days
					</Text>
					<Text fontSize="xs" color="black">
						old POAP
					</Text>
				</Flex>
			</Flex>
		</HStack>
	);
};

export default Stamps;
