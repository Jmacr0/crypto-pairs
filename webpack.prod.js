const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
		clean: true,
	},
	plugins: [
		new InjectManifest({
			swSrc: "./src/service-worker.ts",
			swDest: "./service-worker.js",
		}),
	],
});