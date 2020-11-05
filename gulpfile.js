const gulp = require("gulp"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat");

  /* Paths to be used */
const paths = {
  styles: {
    src: ["./src/scss/main.scss"],
    all: ["./src/scss/*.scss","./src/scss/**/*.scss"],
    dest: "./dist/css/"
  },
  scripts: {
    src: ["./src/js/*.js"],
    lib: "./src/js/lib/*.js",
    dest: "./dist/js/"
  },
  html: {
    src: ["./index.html"],
  },
  AMPEr: {
    scss: ['./src/AMPEr/scss/AMPEr.scss'],
    scss_dest: "./dist/AMPEr/css/",
    js: ["./src/AMPEr/js/AMPEr.js"],
  }
};

/* Process the styles */
function processStyles(done) {
  return gulp.series(style, amperStyle,  done => {
    done();
  })(done);
}

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer()])) 
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

function amperStyle() {
  return gulp
    .src(paths.AMPEr.scss)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer()])) 
    .pipe(gulp.dest(paths.AMPEr.scss_dest))
    .pipe(browserSync.stream());
}

/* Process the scripts */
function processScripts(done) {
  return gulp.series(
    preprocessJs,
    preprocessAmperJs,
    concatJs,
    reload,
    done => {
      done();
    }
  )(done);
}

function preprocessJs() {
  return gulp
    .src(paths.scripts.src)
    .pipe(
      babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"]
      })
    )
    .pipe(gulp.dest("./dist/js/build/"));
}

function preprocessAmperJs() {
  return gulp
    .src(paths.AMPEr.js)
    .pipe(
      babel({
        presets: ["@babel/env"],
        plugins: ["@babel/plugin-proposal-class-properties"]
      })
    )
    .pipe(gulp.dest("./dist/AMPEr/js/"));
}

function concatJs() {
  return gulp
    .src([
      paths.scripts.lib,
      "./dist/js/build/*.js"
    ])
    .pipe(concat("main-concat.js"))
    .pipe(gulp.dest("./dist/js/"));
}


/* Tasks and browserSync */
function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  browserSync.init({
    server: {
        baseDir: "./" 
        // if using vhost-based url
        //proxy: "local.dev"
    }
  });
  gulp.watch(paths.styles.all, processStyles);
  gulp.watch(paths.AMPEr.scss, processStyles);
  gulp.watch(paths.scripts.src, processScripts);
  gulp.watch(paths.AMPEr.js, processScripts);
  gulp.watch(paths.html.src, reload);

}

/* Our tasks */
gulp.task("default", watch);