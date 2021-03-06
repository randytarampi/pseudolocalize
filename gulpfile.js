const gulp = require("gulp");

function isFixed(file) {
    return file.eslint && file.eslint.fixed;
}

gulp.task("eslint", () => {
    const path = require("path");
    const eslint = require("gulp-eslint");
    const gulpIf = require("gulp-if");

    return gulp.src(["**/*.js", "!node_modules/**"])
        .pipe(eslint({fix: true, ignorePath: path.join(__dirname, ".eslintignore")}))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest("./")))
        .pipe(eslint.failAfterError());
});

gulp.task("lint", gulp.parallel(["eslint"]));

gulp.task("test.unit", () => {
    const mocha = require("gulp-mocha");
    const mochaConfig = require("./mocha.config");

    return gulp.src("test/unit/**/*.js", {read: false})
        .pipe(mocha(mochaConfig));
});

gulp.task("test.integration", () => {
    const mocha = require("gulp-mocha");
    const mochaConfig = require("./mocha.config");

    return gulp.src("test/integration/**/*.js", {read: false})
        .pipe(mocha(mochaConfig));
});

gulp.task("test", gulp.parallel(["test.unit", "test.integration"]));
