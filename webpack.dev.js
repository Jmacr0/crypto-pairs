const path = require("path");

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devServer: {
		port: "9500",
		static: ["./build"],
		historyApiFallback: true, 
		open: true,
		hot: true ,
		liveReload: true,    
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	plugins: [
		new webpack.EnvironmentPlugin({
			BASE_URL: "/" 
		}),
	],
	module: { 
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
			},
		],
	}
});