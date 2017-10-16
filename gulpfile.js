//gulp task

var gulp = require('gulp'); 
var jade = require('gulp-jade');

//jade to html
gulp.task('jade', function(){
    gulp.src('./src/*.jade')//compile jade file in src folder
    .pipe(jade({
        pretty: true //cleaner layout
    }))
    .pipe(gulp.dest('./dist')) //compile to dist folder
})

gulp.task('watch', function(){
    gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch']);