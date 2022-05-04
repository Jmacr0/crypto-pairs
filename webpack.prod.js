const path = require("path");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new InjectManifest({
			swSrc: "./src/service-worker.ts",
			swDest: "./service-worker.js",
		}),
		new webpack.EnvironmentPlugin({
			BASE_URL: "/crypto-pairs" 
		}),
	],
});