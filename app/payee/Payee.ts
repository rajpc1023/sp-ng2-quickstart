export class Payee {
  "id": number;
  "payeeName": string;
  "categoryId": number;
  "address": string;
  "city": string;
  "state": string;
  "zip": string;
  "image": string;
  "motto": string;

  private fields: string[] = [
    "id",
    "payeeName",
    "categoryId",
    "address",
    "city",
    "state",
    "zip",
    "image",
    "motto"
  ];

  constructor(config: any) {
    if (typeof config === 'object') {
      for (let x = 0; x < this.fields.length; x++) {
        let field = this.fields[ x ];
        switch ( field ) {
          case 'id':
          case 'categoryId':
            this[field] = config[field] || 0;
            break;
          default:
            this[field] = config[field] || '';
            break;
        }
      }
    }
  }
}
