/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: function (config, { isServer, dev }) {
		config.output.webassemblyModuleFilename =
			isServer && !dev
				? '../static/wasm/[modulehash].wasm'
				: 'static/wasm/[modulehash].wasm';
		config.experiments = { ...config.experiments, asyncWebAssembly: true };
		return config;
	},
};

module.exports = nextConfig;
