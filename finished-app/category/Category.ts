export class Category {
  id: number;
  categoryName: string;

  constructor( config: any ) {
    if ( typeof config === 'object' ) {
      this[ 'id' ] = config[ 'id' ] || 0;
      this[ 'categoryName' ] = config[ 'categoryName' ] || '';
    }
  }

}
