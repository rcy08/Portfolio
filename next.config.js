/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        formats: ["image/webp"],
        domains: ['rc08-s3.s3.ap-south-1.amazonaws.com'],
    }
}

module.exports = nextConfig;
