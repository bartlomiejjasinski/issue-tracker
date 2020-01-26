import * as express from 'express';
import * as mongoose from 'mongoose';
import { Application } from 'express';
import { config } from './config/config.env';

const port = config.serverPort;

class Server {
    private _app: Application;

    constructor() {
        this._app = express();
        this.configMongoose();
    }

    public start(): void {

        this._app.listen(port, () => {
            console.log(`Start server on port: ${port}`);
        });
    }

    private configMongoose() {
        mongoose.connect(config.database.url, err => {
            if (err) {
                console.error(err);
            } else {
                console.log(`connected to: ${config.database.url}`);
            }
        });
    }
}

const server = new Server();
server.start();