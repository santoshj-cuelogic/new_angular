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
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    htmlMin = require('gulp-htmlmin'),
    path = require('path'),
    filePath = {
        appCss: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'assets/css/*.css'
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
        indexHtml: './index.html',
        dest: './build/static',
        env: ''
    },
    environmentFileNames = ['local', 'development', 'staging', 'production'];

/* Tasks */
/* Combine all the css files in one file */
gulp.task('appCss', function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

/* Combine all the css files in one file and minify it*/
gulp.task('appCssMin', function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

/* Combine all the js files in one file */
gulp.task('appJs', function() {

    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(filePath.dest + '/js'));
});

/* Combine all the js files in one file and minify it*/
gulp.task('appJsMin', function() {
    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(filePath.dest + '/js'));
});

/*Get inde index html file and put it in build folder*/
gulp.task('appIndexHtml', function() {

    return gulp.src(filePath.indexHtml)
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./build'));
});

/*Get inde index html file, minify it and put it in build folder*/
gulp.task('appIndexHtmlMin', function() {
    return gulp.src(filePath.indexHtml)
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build'))
});

/*Comapre env parameter and pushed environment file as per given name in env*/
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
    filePath.env = env;
    filePath.appJs.push('config/' + env + '.js');
    callback();
});

/*Run server and watch for changes*/
gulp.task('nodemon', function() {
    nodemon({
            script: 'web_server.js',
        })
        .on('start', ['watch']);
})

/*Watch for changes in file, compile it for changes has done*/
gulp.task('watch', function() {

    if (filePath.env == '') {
        filePath.env = 'local'
        filePath.appJs.push('config/' + filePath.env + '.js');
    }

    gulp.watch(filePath.appCss, ['appCss']);
    gulp.watch(filePath.appJs, ['appJs']);
    gulp.watch(filePath.indexHtml, ['appIndexHtml']);

});

/*Default task which accepts two parameter from command env (name of environment file) and minify flag for minification*/
gulp.task('default', ['addEnv'], function(minify, callback) {

    if (minify) {
        //Minify all the files and run server
        runSequence('appJsMin', 'appCssMin', 'appIndexHtmlMin', 'nodemon', callback);
    } else {
        //Run server without minifing the file
        runSequence('appJs', 'appCss', 'appIndexHtml', 'nodemon', callback);
    }
});
