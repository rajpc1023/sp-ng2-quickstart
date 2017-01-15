var jsonServer = require( 'json-server' ),
  morgan = require( 'morgan' );

require( './morgan-formats' );

var restServer = jsonServer.create();
var router = jsonServer.router( 'data/angular-class.json' );

// logger is false so we can substitute our own custom logger
var middlewares = jsonServer.defaults( { logger: false } );

restServer.use( middlewares );
restServer.use( morgan( 'spurs' ) );
restServer.use( router );
var restServerPort = 8001;
restServer.listen( restServerPort, function() {
  console.log( 'REST Server (json-server) running on http://localhost:' + restServerPort );
} );
