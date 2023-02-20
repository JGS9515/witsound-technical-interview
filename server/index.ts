import 'reflect-metadata';
import { Application } from './app';
import * as dotenv from 'dotenv';

dotenv.config();

import { createConnection, } from 'typeorm';
import * as appConfig from './app/config/config';
await createConnection(appConfig.dbOptions).then(async (connection) => {
  const application: Application = new Application();
  application.startServer();
}).catch(error => console.log("TypeORM connection error: ", error));
