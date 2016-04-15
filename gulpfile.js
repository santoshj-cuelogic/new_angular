/**
 * Gulp Task js for internal Javascript and CSS (Less) files
 * Include dependencies
 */
'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    path = require('path'),
    filePath = {
        appJs: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-lazy-img/release/angular-lazy-img.js',
            'app/services/base/base.service.js',
            'app/modules/base/base.index.js',
            'app/modules/base/controllers/base.controller.js',
            'app/modules/base/base.route.js',
            'app/modules/login/login.index.js',
            'app/modules/login/controllers/login.controller.js',
            'app/modules/login/login.route.js',
            'app/directives/dashboard/dashboard.directives.js',
            'app/modules/dashboard/dashboard.index.js',
            'app/modules/dashboard/controllers/dashboard.controller.js',
            'app/modules/dashboard/dashboard.route.js',
            'app/app.js'
        ]
    };

/* Tasks */

gulp.task('appJs', function() {

    return gulp.src(filePath.appJs)
           .pipe(concat('app.js'))
           .pipe(gulp.dest(''));
});

gulp.task('appJsMin', function() {
    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest(''));
});

/** Initialize **/
gulp.task('default', function(callback) {
    console.log("Ooops! You will have to mention a specific task EX. gulp minify or gulp skip-minify");
});

gulp.task('skip-minify', function(callback) {
    runSequence('appJs', callback);
});

gulp.task('minify', function(callback) {
    runSequence('appJsMin', callback);
});
