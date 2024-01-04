export default class PetsService {
  // This is example. You can remove this class.
  // private config: any;
  // private db: any;

  constructor(container, options) {
    // get the config service from the DI container
    //this.config = container.config;

    // get the database connection from the DI container
    //this.db = container.db.em;
  }

  async getAll() {
    // get pets entity from the DI container
    // const petsModel = this.db.getRepository('User')
    // await petsModel.findOne({ id: 1})

    return [
      { name: 'dog' },
      { name: 'cat' },
      { name: 'mouse' }
    ];
  }
}