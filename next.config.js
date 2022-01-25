const API_KEY = process.env.API_KEY;
const withImages = require("next-images");
module.exports = withImages();
module.exports = {
	reactStrictMode: true,

	// change url
	async redirects() {
		return [
			{
				source: "/cotact",
				destination: "/form",
				permanent: false,
			},
		];
	},
	// remain url but change contents
	async rewrites() {
		return [
			{
				source: "/api/movies",
				// api key
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
			},
		];
	},
};
