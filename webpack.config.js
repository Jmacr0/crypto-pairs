const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const {InjectManifest} = require("workbox-webpack-plugin");

module.exports={
    mode: "development", 
    entry: {
        main: "./src/index.tsx",
        ["service-worker"]: "./src/service-worker.ts", 
    },
    output: {
        path: path.resolve(__dirname, "build/static"),
        filename: "[name].js",
        clean: true,
    },
    target: "web",
    devServer: {
        port: "9500",
        static: ["./build"],
        /** "open" 
         * opens the browser after server is successfully started
        */
        open: true,
        /** "hot"
         * enabling and disabling HMR. takes "true", "false" and "only". 
         * "only" is used if enable Hot Module Replacement without page 
         * refresh as a fallback in case of build failures
         */
        hot: true ,
        /** "liveReload"
         * disable live reload on the browser. "hot" must be set to false for this to work
        */
        liveReload: true
    },
    resolve: {
        /** "extensions" 
         * If multiple files share the same name but have different extensions, webpack will 
         * resolve the one with the extension listed first in the array and skip the rest. 
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.tsx','.ts','.jsx','.js'] 
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
                use:  'babel-loader' //loader which we are going to use
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
        ]
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            title: 'Crypto Pairs',
            template: "public/index.html",
            filename: '../index.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: "public/static/manifest", to: "../static/manifest" },
            ],
        }),
        new InjectManifest({
            swSrc: "./src/service-worker.ts",
        }),
    ],
};