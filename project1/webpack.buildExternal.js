const path = require('path');
const outPath = path.resolve('../project2');

module.exports = {
    mode: "development",
    target: "web",
    entry: outPath,
    context: outPath,
    output: {
        path: path.join(outPath, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.(js)$/i,
                exclude: /node_modules/,
                include: [
                    path.resolve(outPath, "src/")
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
						presets: ['@babel/preset-env'], 
					}
                },
            },
        ],
    },

    stats: {
        errorDetails: true
    },
}