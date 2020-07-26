let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('assets/popup.js', 'dist')
    .options({
        processCssUrls: false
    })
    .version();