const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin'); // gzip
const BrotliPlugin = require('brotli-webpack-plugin'); // brotli

module.exports = {
    plugins: [
        new CompressionPlugin({
            // gzip plugin
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|scss)$/,
            threshold: 8192,
            minRatio: 0.8,
        }),
        new BrotliPlugin({
            // brotli plugin
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg|scss)$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new BundleAnalyzerPlugin(),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
    },
};
