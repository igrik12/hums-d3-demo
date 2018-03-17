const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../Content');


module.exports = {
    entry: {
        index: __dirname + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: '[name]bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    compact: false,
                    presets: ['env', 'react', 'stage-0', 'stage-1']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    }
};