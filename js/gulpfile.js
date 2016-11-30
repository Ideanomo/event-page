'use strict';
var gulp = require('gulp');

process.env.NODE_PATH = 'src';

require('./gulp/app');
require('./gulp/vendor');
require('./gulp/watch');

gulp.task('build', [
    'vendor',
    'app',
]);

gulp.task('default', ['build'], function() {
    return gulp.start('watch');
});