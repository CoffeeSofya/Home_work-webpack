const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js'
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        open: true,
        hot: true,
        port: 9000,
      },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
        ]
    }

};