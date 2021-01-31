
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		//index: path.resolve( process.cwd(), 'src', 'index.js' ),
		script: './src/script.js',

	},
};
