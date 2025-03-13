/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images: {
        unoptimized: true, // Bypass Image Optimization if issues persist
      }
};

export default nextConfig;
