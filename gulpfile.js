const gulp = require('gulp');
const bsync = require('browser-sync').create();

gulp.task('serve', () => {
    sync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('*.html').on('change', bsync.reload);
    gulp.watch('*.css').on('change', bsync.reload);
})

gulp.task('default', gulp.task('serve'));