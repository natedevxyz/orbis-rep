import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import '@fontsource/poppins';

const fonts = {
	...chakraTheme.fonts,
	body: '"Poppins", sans-serif',
	heading: '"Poppins", sans-serif',
};

const overrides = {
	...chakraTheme,
	fonts,
};

const customTheme = extendTheme(overrides);

export default customTheme;
