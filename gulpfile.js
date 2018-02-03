var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss')

    .pipe(sass({outputStyle:'expanded'}))

    .pipe(gulp.dest('./src/css/'))
});

gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})

// var browserSync = require('browser-sync');

// gulp.task('server',function(){
//     browserSync({

//         server:'./src/',
//         port:1008,

//         files:['./src/**/*.html','./src/css/*.css']
//     });

//     gulp.watch('./src/scss/*.scss',['compileSass']);
// })