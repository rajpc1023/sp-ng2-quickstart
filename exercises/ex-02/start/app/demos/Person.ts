export class Person {
  name: string;
  gender: string;
  age: number;
  id: string;

  static fields = [ 'name', 'gender', 'age', 'id' ];

  constructor(options:{} = {}) {
    let instance = this;
    Person.fields.forEach( field => {
      if (options[field]) {
        this[ field ] = options[ field ];
      }
    });
  }
}
