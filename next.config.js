/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
};

module.exports = withPlugins(
    [
        [
            withPWA,
            {
                pwa: {
                    dest: "public",
                    disable: process.env.NODE_ENV === 'development',
                    manifest: {
                        display: 'standalone',
                        // 다른 매니페스트 속성...
                    },
                },
            },
        ],
    ],
    nextConfig
);