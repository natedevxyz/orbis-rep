/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: function (config) {
		config.experiments = { asyncWebAssembly: true };
		return config;
	},
};

module.exports = nextConfig;
