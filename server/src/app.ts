import * as express from 'express';
import { Application } from 'express';
import { config } from './config/config.env';

const port = config.serverPort;

class Server {
    private _app: Application;

    constructor() {
        this._app = express();
    }

    public start(): void {

        this._app.listen(port, () => {
            console.log(`Start server on port: ${port}`);
        });
    }
}

const server = new Server();
server.start();