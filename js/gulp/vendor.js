'use strict';

var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var util = require('gulp-util');

var pkg = require('../package.json');
var _ = require('lodash');

var libs = _.keys(pkg.dependencies);

gulp.task('vendor', function() {
    var production = (process.env.NODE_ENV === 'production');

    var b = browserify({
        debug: false
    });

    b.on('bundle', function(bundle) {
        libs.forEach(function(lib) {
            b.require(lib);
        });
    });

    var build = b.bundle()
        .pipe(source('vendor.js'))
        .pipe(buffer());

    if (production) {
        util.log('Uglifying vendor source');
        build.pipe(uglify()).on('error', util.log);
    }

    return build.pipe(gulp.dest('.'))
        .pipe(notify({message: 'vendor task complete'}));
});

exports.libs = libs;