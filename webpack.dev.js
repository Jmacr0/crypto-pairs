const path = require("path");

const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "build-dev"),
		filename: "[name].js",
		clean: true,
	},
	devServer: {
		port: "9500",
		static: ["./build-dev"],
		open: true,
		hot: true ,
		liveReload: true,    
	},
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