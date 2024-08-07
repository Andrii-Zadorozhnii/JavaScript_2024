const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// LOAD PLAGINS

const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

function clear() {
    return src('./build/*', {
            read: false
        })
        .pipe(clean());
}

// CSS

function css() {
    const source = './src/css/style.css'

    return src(source)
        .pipe(changed(source))
        .pipe(cssnano())
        .pipe(dest('./build/css/'))
        .pipe(browsersync.stream());
}

// IMG

function img() {
    return src('./src/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'));
}

// HTML

function html() {
    return src('./src/*.html')
        .pipe(dest('./build/'))
        .pipe(browsersync.stream());
}

// WATCH FILES

function watchFiles() {
    watch('./src/css/*', css);
    watch('./src/*.html', html);
    watch('./src/images/*', img);
}

// browsersync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './build'
        },
        port: 3000
    })
}

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(html, css, img));