import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as morgan from 'morgan';
import routes from "./routes";

const app = express()
createConnection().then(() => {

    app.use(cors());
    app.use(morgan("tiny")); // Dispõe um log no console com detalhes de requisições http recebidas.
    app.use(bodyParser.json())
    app.use('/tasks', routes)

    let PORT = 3333 || process.env.PORT;

    app.listen(PORT, () => {
        console.log("Server is running at http://localhost:" + PORT);
    })
}).catch(er => console.log(er));

