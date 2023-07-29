/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "space-landing-ltw28ynvl-iandominic.vercel.app/hero",
        permanent: true,
      },
    ];
  },
};
