let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'resources/assets/js/dist')
.sass('resources/assets/sass/app.scss', 'public/css')
.styles([
    'vendor/twbs/bootstrap/dist/css/bootstrap-reboot.css',
    'vendor/twbs/bootstrap/dist/css/bootstrap.min.css',
    'vendor/twbs/bootstrap/dist/css/bootstrap-reboot.css',
    'resources/assets/css/user/Footer-Dark.css',
    'resources/assets/css/user/MUSA_panel-table.css',
    'resources/assets/css/user/MUSA_product-display.css',
    'resources/assets/css/user/Product-Details.css',
    'resources/assets/css/user/sidebar.css',
    'resources/assets/css/user/Newsletter-Subscription-Form.css ',
    'node_modules/sweetalert2/dist/sweetalert2.css',
        ], 'public/css/user.css')
    .scripts([
        'resources/assets/js/dist/app.js',
        'node_modules/sweetalert2/dist/sweetalert2.js',
        'resources/assets/js/user/MUSA_product-display.js',
        'resources/assets/js/user/script.js'
    ],'public/js/user.js');

   ;
