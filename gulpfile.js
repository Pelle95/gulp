const { src, dest, watch, series, parallel } = require("gulp");
// Paket för att sammanslå filer
const concat = require("gulp-concat");
// Paket för att minifiera JS
const terser = require("gulp-terser");
// Paket för att minifiera CSS
const cleanCSS = require("gulp-clean-css");




// Paket för livereload
const browserSync = require("browser-sync").create();

// SASS
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass');

// Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*",
    sassPath: "src/**/*.scss"
}

// Kopierar HTML-filer och kallar på en livereload efter kodförändringar är färdiga
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub'))
        .pipe(browserSync.stream()
    );
}

// Kopiera bilder
function copyImg() {
    return src(files.imgPath)
        .pipe(dest('pub/img')
    );
}






// SASS-task

function sassTask() {
    return src(files.sassPath)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat("main.css"))
        .pipe(dest('pub/css'))
        .pipe(browserSync.stream()
        );
}




// Sammanslår och minifierar CSS-filer, kallar även på en livereload efter kodförändringar är färdiga
function cssTask() {
    return src(files.cssPath)
        .pipe(concat("style.css"))
        .pipe(cleanCSS())
        .pipe(dest('pub/css'))
        .pipe(browserSync.stream()
    );
}





// Sammanslår och minifierar JS-filer, kallar även på en livereload efter kodförändringar är färdiga
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(dest('pub/js'))
        .pipe(browserSync.stream()
    );
}

// Live reloading
function reloadBrowser() {
    // Startar en server
    browserSync.init({
        server: {
            baseDir: './pub/'
        }
    });
    // Ifall SCSS-, CSS-, HTML-, eller JS-filer ändras laddas webbläsaren om
    watch(files.cssPath).on('change', browserSync.reload);
    watch(files.sassPath).on('change', browserSync.reload);
    watch(files.htmlPath).on('change', browserSync.reload);
    watch(files.jsPath).on('change', browserSync.reload);
}

// Watcher för att kopiera över filer när de förändras
function watchTask() {
    watch([files.htmlPath, files.imgPath, files.sassPath, files.cssPath, files.jsPath],
         parallel(copyHTML, copyImg, sassTask, cssTask, jsTask));
}

// Startar funktionen för live reloading
reloadBrowser();

// Default task
exports.default = series(
    parallel(copyHTML, copyImg, sassTask, cssTask, jsTask),
    watchTask
);