import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Content from '../app/models/Content';
import Curiosity from '../app/models/Curiosity';
import Interest from '../app/models/Interest';
import Permission from '../app/models/Permission';
import Survey from '../app/models/Survey';
import Topic from '../app/models/Topic';

const models = [User, Curiosity, Interest, Permission, Survey, Topic, Content];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
