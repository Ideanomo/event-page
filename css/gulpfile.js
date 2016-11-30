'use strict';
var gulp = require('gulp');

require('./gulp/css');
require('./gulp/watch');

gulp.task('build', [
    'css'
]);

gulp.task('default', ['build'], function() {
    return gulp.start('watch');
});