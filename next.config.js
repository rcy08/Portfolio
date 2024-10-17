/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        formats: ["image/webp"],
        domains: ['s3.amazonaws.com'],
    }
}

module.exports = nextConfig;
