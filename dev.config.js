const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.sass|scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	devtool: '#eval-source-map',
	performance: {
		hints: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"development"'
			}
		}),
		new BrowserSyncPlugin({
			proxy: 'webpack-wp.loc',
			files: ['**/*.php'],
			reloadDelay: 0,
			notify: false,
			open: false
		}),
		new webpack.NamedModulesPlugin()
	]
});
