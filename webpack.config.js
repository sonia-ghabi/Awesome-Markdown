module.exports = {
	entry: './app/js/main.js',
	output: {
		path: './',
		filename: 'index.js',
		pathinfo: true
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style!css'
			}
		]
	},
	devtool: 'source-map'
}