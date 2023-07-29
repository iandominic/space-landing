/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "https://space-landing-puce.vercel.app/",
        destination: "/hero",
        permanent: true,
      },
    ];
  },
};
