'use strict';

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

var libs = require('./vendor').libs;

gulp.task('app', function() {
    var production = (process.env.NODE_ENV === 'production');

    var b = browserify(['src/main.js'], {
        debug: !production
    });

    b.external(libs);

    var build = b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer());

    if (production) {
        util.log('Uglifying app source');
        build.pipe(uglify()).on('error', util.log)
    }

    return build.pipe(gulp.dest('.'))
        .pipe(notify({message: 'app task complete'}));
});
