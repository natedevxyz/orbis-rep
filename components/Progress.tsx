import {
	Flex,
	Image,
	Text,
	CircularProgress,
	CircularProgressLabel,
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
					></Image>
				</CircularProgressLabel>
			</CircularProgress>
			<Text color="white" fontWeight="bold" fontSize="xl" mt={5}>
				OrbisRep: {score}%
			</Text>
		</Flex>
	);
};

export default Progress;
