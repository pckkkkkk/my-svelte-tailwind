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
        require("postcss-import")(),
        require('tailwindcss'),
        require('postcss-preset-env')({
            stage: 3,
            features: {
                'nesting-rules': true
            },
            browsers: 'last 2 versions' 
        }),
        require('cssnano')({
            preset: 'default'
        }),
        ...!dev ? [ purgecss ] : []
    ]
}