module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./styles/tailwind.config.js'),
        require('autoprefixer'),
    ]
}