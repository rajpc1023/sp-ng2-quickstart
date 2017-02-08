var gulp = require( 'gulp' ),
  gulpif = require( 'gulp-if' ),
  del = require( 'del' ),
  minimist = require( 'minimist' ),
  exercises = 'exercises/',
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

gulp.task( 'clean-app', function() {
  return del( app + 'payee/*'  );
} );

gulp.task( 'app-to-finish', [ 'clean-finish' ], function() {
  if ( options.dest )
    gulp.src( [app + 'payee/*.+(ts|html|css)', app + '*.+(ts|html|css)'], {base: 'app'} )
      .pipe( gulp.dest( exercises + options.dest + finish + app ) );
} );

gulp.task( 'finish-to-app', [ 'clean-app' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + finish + app + '**/*.+(ts|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );

gulp.task( 'app-to-start', [ 'clean-start' ], function() {
  if ( options.dest )
  gulp.src( [app + 'payee/*.+(ts|html|css)', app + '*.+(ts|html|css)'], {base: 'app'} )
    .pipe( gulp.dest( exercises + options.dest + start + app ) );
} );

gulp.task( 'start-to-app', [ 'clean-app' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + start + app + '**/*.+(ts|html|css)' )
      .pipe( gulp.dest( app ) );
  }
} );
