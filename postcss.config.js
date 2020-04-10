const dev = process.env.ROLLUP_WATCH

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./src/**/*.svelte',
		'./src/**/*.css',
		'./src/**/*.html'
	],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('cssnano')({
			preset: 'default'
		}),
		...!dev ? [ purgecss ] : []
	]
}