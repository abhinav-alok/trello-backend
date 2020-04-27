import express from 'express';
import {mongoConfig, serverConfig} from './config'
import Routes from './interfaces/router.interface'
import * as mongoose from "mongoose";

class App{
    public app: express.Application;
    public port: string | number;
    public  env: boolean

    constructor(routes: Routes[]){
        this.app = express();
        this.port = serverConfig.port || 7000;
        this.env = serverConfig.environment === 'production';

        this.connectToDb();
        this.initializeMiddleWare();
        this.initializeRoutes(routes)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`🚀 App listening on the port ${this.port}`);
        });
    }

    private initializeMiddleWare(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use('/',route.router);
        });
    }

    private connectToDb() {
        const options = {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };

        mongoose.set('debug', true);

        mongoose.connect(`${mongoConfig.uri}`, {...options})
            .then(r => {
                console.log(`🔥 Connected to Database!`);
            });
    }
}

export default App
