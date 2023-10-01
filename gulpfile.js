const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function style() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'));
}

function image() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function compressJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(style, image, compressJs);

exports.watch = () => {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.parallel(style));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.parallel(compressJs));
}