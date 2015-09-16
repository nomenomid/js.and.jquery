var gulp = require("gulp"); 
var concat = require("gulp-concat");

gulp.task("css", function() {
    return gulp.src("css/*.css")
        .pipe(concat("all.css"))
        .pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
    gulp.watch("css/*.css", ["css"]);    
});

gulp.task("default", ["css", "watch"]);