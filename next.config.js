const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "picsum.photos"],
    loader: "akamai",
    path: "/",
  },
});
