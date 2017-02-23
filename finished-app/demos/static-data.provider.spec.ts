import { StaticDataService } from './static-data.provider';

describe( 'Testing StaticDataService, a very basic provider', () => {
  let service: StaticDataService;

  beforeEach( () => {
    service = new StaticDataService();
  } );

  it( '#getServiceName should return the serviceName', () => {
    expect( service.getServiceName() ).toEqual( 'StaticDataService' );
  } );

  it( '#add should successfully add results', () => {
    expect( service.add( 2, 3 ) ).toEqual( 2 + 3 );
  } )
} )
