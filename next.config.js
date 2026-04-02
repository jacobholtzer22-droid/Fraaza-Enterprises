/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/hydroseeding",
        destination: "/services/hydroseeding",
        permanent: true,
      },
      {
        source: "/erosion-control",
        destination: "/services/hydroseeding",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/care-and-watering",
        destination: "/services/hydroseeding",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

