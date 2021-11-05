import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as morgan from 'morgan';
import routes from "./routes";
import { log } from "console";

require("dotenv").config();

const config:any = {
    "type": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
       "./src/entity/*"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }
 
const app = express()
createConnection(config).then(() => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(morgan('tiny'));

    app.use('/api/v1/aluno',routes);
 
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => {
        log('Server is running at http://localhost:' + PORT);
    });
}).catch(console.log);