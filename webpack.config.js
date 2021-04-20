const path = require("path");
module.exports = {
    entry: "./typescript/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{ test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ }],
    },
    resolve: {
        extensions: [".ts"],
    },
};
