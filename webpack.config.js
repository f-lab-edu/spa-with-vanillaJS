import path from'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode:"development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),  // src 폴더를 '@'로 alias 설정
    },
  },
    module: {
        rules: [
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
  static: path.join(__dirname, "dist"),
  port: 9000
}
};
