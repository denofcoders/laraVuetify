const mix = require('laravel-mix');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            '~': path.join(__dirname, './resources/js'),
            '$comp': path.join(__dirname, './resources/js/components'),
        }
    },
    plugins: [
        new VuetifyLoaderPlugin()
    ]
});

mix.browserSync('127.0.0.1:8000'); // Hot Reloading
