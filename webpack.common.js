const path = require("path");

require("dotenv").config(); 

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
	target: "web",
	entry: {
		main: "./src/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js",
		clean: true,
	},
	resolve: {
		extensions: [".tsx",".ts",".jsx",".js"] 
	},
	module:{
		/** "rules"
         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
         * file inside of a require()/import statement, use the babel-loader to transform it before you 
         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
         * being searched"
         */
		rules: [
			{
				test: /\.(ts|tsx)$/,    //kind of file extension this rule should look for and apply in test
				exclude: /node_modules/, //folder to be excluded
				use:  "babel-loader" //loader which we are going to use
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],			
			},
		]
	},
	plugins: [
		// fix "process is not defined" error:
		// (do "npm install process" before running the build)
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
		// new webpack.EnvironmentPlugin([""]),
		new HtmlWebpackPlugin({
			title: "Crypto Pairs",
			template: "public/index.html",
			filename: "index.html"
		}),
		new CopyPlugin({
			patterns: [
				{ from: "public/static/manifest", to: "static/manifest" },
			],
		}),
	],
};