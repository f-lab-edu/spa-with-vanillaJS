import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: './src/index.ts', // Update this if your entry point is now a .ts file
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Add .ts and .tsx here
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }, // Add this rule
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpg|jpeg|png|glb|gltf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, "dist"),
        port: 9000
    }
};
