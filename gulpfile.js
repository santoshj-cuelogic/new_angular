/**
 * Gulp Task js for internal Javascript and CSS (Less) files
 * Include dependencies
 */
'use strict';

var gulp = require('gulp-param')(require('gulp'), process.argv),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    runSequence = require('run-sequence'),
    path = require('path'),
    filePath = {
        appCss: [
            'assets/css/styles/app.css'
        ],
        appJs: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-lazy-img/release/angular-lazy-img.js',
            'app/**/**/*.js',
            'app/modules/**/**/*.js',
            'app/app.js'
        ],
        dest: './build/static'
    },
    environmentFileNames = ['local', 'development', 'staging', 'production'];

/* Tasks */
gulp.task('appCss', function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

gulp.task('appCssMin', function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

gulp.task('appJs', function() {

    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(filePath.dest));
});

gulp.task('appJsMin', function() {
    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(filePath.dest));
});

/** Initialize **/
gulp.task('default', function(callback) {
    console.log("Ooops! You will have to mention a specific task EX. gulp minify or gulp skip-minify");
});

gulp.task('addEnv', function(env, callback) {

    /*If user has not provided any environment file name*/
    if (env == undefined || env == true || (environmentFileNames.indexOf(env) == -1)) {
        console.log('Please provide environment file name to be include i.e');
        console.log('--env local');
        console.log('--env development');
        console.log('--env staging');
        console.log('--env production');
        return;
    }

    filePath.appJs.push('config/' + env + '.js');
    callback();
});

gulp.task('skip-minify', ['addEnv'], function(env, callback) {
    runSequence('appJs', 'appCss', callback);
});

gulp.task('minify', ['addEnv'], function(env, callback) {
    runSequence('appJsMin', 'appCssMin', callback);
});
