const mix = require('laravel-mix');

mix.ts('themes/site/src/js/app.tsx', 'themes/site/dist/js').react();

mix.postCss('themes/site/src/css/style.css', 'themes/site/dist/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
]).options({
    processCssUrls: false,
});
