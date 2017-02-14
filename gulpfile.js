var gulp = require( 'gulp' ),
  gulpif = require( 'gulp-if' ),
  strip = require( 'gulp-strip-comments' ),
  del = require( 'del' ),
  minimist = require( 'minimist' ),
  exercises = 'exercises/',
  finishedApp = 'finished-app/',
  demos = 'demos/',
  start = '/start/',
  finish = '/finish/',
  app = 'app/';

var options = minimist( process.argv.slice( 2 ) );

gulp.task( 'clean-start', function() {
  if ( options.dest )
    return del( exercises + options.dest + start + app );
} );

gulp.task( 'clean-finish', function() {
  if ( options.dest )
    return del( exercises + options.dest + finish + app );
} );

gulp.task( 'clean-payee', function() {
  return del( app + 'payee/*' );
} );

gulp.task( 'clean-app', function() {
  return del( app + '**/*' );
} );

gulp.task( 'clean-demos', function() {
  return del( app + 'demos/*' )
} );

gulp.task( 'strip', function() {
  if ( options.dest ) {
    let base = exercises + options.dest;
    gulp.src( [ base + start + '**/*', base + finish + '**/*' ], { base: base } )

    // Be careful, as this may ruin regexps
    // But is necessary for anything with decorators
      .pipe( strip.text() )
      .pipe( strip.html() )
      .pipe( gulp.dest( base ) );
  }
} );

gulp.task( 'copy-demos', ['clean-demos'], function() {
  gulp.src( finishedApp + demos + '**/*' )
    .pipe( gulp.dest( app ) );
} );

gulp.task( 'app-to-finish', [ 'clean-finish' ], function() {
  if ( options.dest )
    gulp.src( [ app + 'payee/*.+(ts|html|css)', app + '*.+(ts|html|css)', '!' + app + 'main.*' ], { base: 'app' } )
      .pipe( gulp.dest( exercises + options.dest + finish + app ) );
} );

gulp.task( 'finish-to-app', [ 'clean-payee' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + finish + app + '**/*.+(ts|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'app-to-start', [ 'clean-start' ], function() {
  if ( options.dest )
    gulp.src( [ app + 'payee/*.+(ts|html|css)', app + '*.+(ts|html|css)', '!' + app + 'main.*' ], { base: 'app' } )
      .pipe( gulp.dest( exercises + options.dest + start + app ) );
} );

gulp.task( 'start-to-app', [ 'clean-payee' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + start + app + '**/*.+(ts|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'swap', function() {
  if ( options.src && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + options.src + '/**/*', { base: base + options.src } )
      .pipe( gulp.dest( base + options.dest ) );
  }
} );
