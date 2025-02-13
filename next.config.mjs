/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // ✅ Skips ESLint errors during production build
	},
};

export default nextConfig;
