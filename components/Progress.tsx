import {
	Flex,
	Image,
	Text,
	CircularProgress,
	CircularProgressLabel,
	Link,
} from '@chakra-ui/react';

interface ProgressProps {
	avatarUrl: string;
	score: number;
}

const Progress = ({ avatarUrl, score }: ProgressProps) => {
	return (
		<Flex flexDirection="column" align="center">
			<CircularProgress size="16rem" value={score} color="#91E755">
				<CircularProgressLabel>
					<Image
						src={avatarUrl}
						maxH="12rem"
						borderRadius="full"
						ml={8}
						objectFit="contain"
					/>
				</CircularProgressLabel>
			</CircularProgress>
			<Text color="white" fontWeight="bold" fontSize="xl" mt={5}>
				OrbisRep: {score}%
			</Text>
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
