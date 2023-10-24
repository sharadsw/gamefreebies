/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Credentials",
            value: process.env.CORS_CREDS,
          },
          {
            key: "Access-Control-Allow-Origin",
            value: process.env.SERVICE_URL,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: process.env.CORS_METHODS,
          },
          {
            key: "Access-Control-Allow-Headers",
            value: process.env.CORS_HEADERS,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
