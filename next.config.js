/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hero",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
