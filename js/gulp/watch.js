'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    var app = watch('src/**/*.js');
    app.on('ready', function(event) {
        gutil.log('ready')
    });
    app.on('change', function(event) {
        gulp.start('app', function() {
            gutil.log(gutil.colors.bgGreen('app change...'));
        });
    });

    //var vendor = watch('node_modules/**/*.js');
    //vendor.on('change', function(event) {
    //    gulp.start('vendor', function() {
    //        gutil.log(gutil.colors.bgGreen('Vendor change...'));
    //    });
    //});

    gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});