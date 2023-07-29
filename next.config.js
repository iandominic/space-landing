/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
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
