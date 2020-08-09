let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/js/popup.js', 'dist/js')
    .sass('assets/sass/popup.scss', 'dist/css')
    .options({
        processCssUrls: false
    })
    .version();