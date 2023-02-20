import "reflect-metadata";
import { ConnectionOptions } from "typeorm";
import { User } from '../data';


export let dbOptions: ConnectionOptions = {
    type: "better-sqlite3",
    name: 'default',
    database: "database.sqlite",
    entities: [User],
    synchronize: true,
} 
