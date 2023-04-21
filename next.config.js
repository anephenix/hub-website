const path = require('path');

const applyWebpackConfig = (test = /\.jsx/) => {
	return (config, options) => {
		config.module.rules.push({
			test,
			use: [options.defaultLoaders.babel],
		});
		return config;
	};
};

module.exports = {
	sassOptions: {
		includePaths: [path.resolve('node_modules')],
	},
	webpack: applyWebpackConfig(),
};
