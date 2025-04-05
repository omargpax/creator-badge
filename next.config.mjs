/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.buymeacoffee.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/svg',
                destination: '/api/svg',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;