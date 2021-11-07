const gulp = require("gulp");
const spritesmith  = require('gulp.spritesmith');

gulp.task('sprite', function () {
    var spriteData = gulp.src('frontend/images-to-sprite/*.png').pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));
    return spriteData.pipe(gulp.dest('frontend/styles/sprite'));
});