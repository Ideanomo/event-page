var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

var options = {
    sourcemap: true,
    style: 'compact'
};

gulp.task('css', function() {
    if (process.env.NODE_ENV === 'production') {
        options.sourcemap = false;
        options.style = 'compressed';
    }
    
    return gulp.src('./src/main.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
        .pipe(notify({message: 'css task complete'}));
});