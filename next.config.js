/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "fraazaenterprises.com" }],
        destination: "https://www.fraazaenterprises.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
