const path = require("path");

const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    mode: "development",
    // 入口文件
    entry: "./src/main.js",
    // 出口文件
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            // 处理Vue文件
            { test: /\.vue$/, use: "vue-loader" },
            // 转换js文件
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // 处理css文件
            { test: /\.s[ca]ss$/, use: ["style-loader", "css-loader", "scss-loader"] },
            // 处理图片
            { test: /\.(png|jpg|gif)$/, type: "asset/image" },
        ],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "#": path.resolve(__dirname, "src/components"),
        },
    },
    devServer: {
        static: path.resolve(__dirname + "/dist"),
        open: true,
        port: "auto",
        onListening: function (devServer) {
            console.log("server is listening, port is " + devServer.server.address().port);
        },
        // 热模块替换
        hot: true,
    },
    plugins: [new VueLoaderPlugin()],
    // 源代码映射
    devtool: "source-map",
};
