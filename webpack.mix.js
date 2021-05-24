const mix = require('laravel-mix');

mix.setPublicPath('public');

mix.copyDirectory('themes/site/src/images', 'public/images');

mix.js('themes/site/src/js/app.js', 'themes/site/dist/js').react();

mix.postCss('themes/site/src/css/style.css', 'themes/site/dist/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
]).options({
    processCssUrls: false,
});
