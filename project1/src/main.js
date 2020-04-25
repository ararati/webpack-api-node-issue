const config = require('../webpack.buildExternal');
const webpack = require('webpack');

const compiler = webpack(config);

export default function runAssembly() { 
        compiler.run((err, stats) => {
            if (err) {
                if (err.details) {
                    console.error(err.details);
                }
                return;
            }

            const info = stats.toJson();

            if (stats.hasErrors()) {
                console.error(info.errors);
            }

            if (stats.hasWarnings()) {
                console.warn(info.warnings);
            }
        });
}

runAssembly();