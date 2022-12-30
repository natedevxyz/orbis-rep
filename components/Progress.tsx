import {
	Flex,
	Image,
	Text,
	CircularProgress,
	CircularProgressLabel,
	Link,
	Box,
	Button,
} from '@chakra-ui/react';
import Jdenticon from 'react-jdenticon';
import krebitService from '../services/krebit';

interface ProgressProps {
	avatarUrl: string;
	address: string;
	score: number;
	chainId: number;
	toast: any;
}

const Progress = ({
	avatarUrl,
	address,
	score,
	chainId,
	toast,
}: ProgressProps) => {
	const issueCredential = async () => {
		const krebit = await krebitService.issueCredential(address, score);
		if (krebit) {
			toast();
		}
	};

	return (
		<Flex flexDirection="column" align="center">
			<CircularProgress size="16rem" value={score} color="#91E755">
				<CircularProgressLabel>
					{!avatarUrl ? (
						<Box ml={8}>
							<Jdenticon size="12rem" value="test" />
						</Box>
					) : (
						<Image
							src={avatarUrl}
							maxH="12rem"
							borderRadius="full"
							ml={8}
							objectFit="contain"
						/>
					)}
				</CircularProgressLabel>
			</CircularProgress>
			<Flex align="center" justify="space-around" mt={5} minW="100%">
				<Text color="white" fontWeight="bold" fontSize="xl">
					OrbisRep: {score}%
				</Text>
				{chainId !== 137 ? (
					<Button
						color="white"
						bg="#101828"
						border="2px"
						borderColor="#00FFFE"
						_hover={{ bg: '#101828' }}
						_active={{ bg: '#101828' }}
						disabled
						minW="11rem"
					>
						Switch to <Image src="polygonLogo.png" maxH="1.5rem" ml={1} />
					</Button>
				) : score < 50 ? (
					<Button
						color="white"
						bg="#101828"
						border="2px"
						borderColor="#00FFFE"
						_hover={{ bg: '#101828' }}
						_active={{ bg: '#101828' }}
						disabled
						minW="11rem"
					>
						Score too low
					</Button>
				) : (
					<Button
						color="white"
						bg="#101828"
						border="2px"
						borderColor="#00FFFE"
						_hover={{
							bgGradient: 'linear(to-l, #B575FB 0%, #01FDFE 100%)',
							color: '#101828',
							borderColor: '#101828',
						}}
						_active={{
							bgGradient: 'linear(to-l, #B575FB 0%, #01FDFE 100%)',
							color: '#101828',
							borderColor: '#101828',
						}}
						minW="11rem"
						onClick={issueCredential}
					>
						Issue on{' '}
						<Image src="krebitTitle.png" maxH="1.5rem" ml={1} mt={0.4} />
					</Button>
				)}
			</Flex>
			{score < 100 && (
				<Flex
					mt={5}
					as={Link}
					href="https://passport.gitcoin.co/"
					_hover={{
						textDecoration: 'none',
					}}
				>
					<Text color="white" fontSize="xl">
						Get more credentials at
					</Text>
					<Image src="/gitcoinPassportLogoWhite.svg" maxH="5rem" ml={2} />
				</Flex>
			)}
		</Flex>
	);
};

export default Progress;
