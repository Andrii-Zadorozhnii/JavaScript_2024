const {
    src,
    dest,
    parallel,
    searies,
    watch
} = require('gulp');

// Load plugins

const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('broweser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

function clear() {
    return src('./build/*', {
            read: false
        })
        .pipe(clean())
}

// CSS

function css() {
    const sourse = './src/css/style.css';

    return src(source)
        .pipe(change(source))
        .pipe(cssnano())
        .pipe(dest('./build/css/'))
        .pipe(browsersync.stream());
}

// optimize images

function img() {
    return src('./src/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images/'))
}

// html

function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
}