import {Router} from 'express';
import Route from '../../interfaces/router.interface';
import TaskController from './task.controller';

import {middleware as query} from 'querymen';
import {Types} from "mongoose";


class TaskRoute implements Route {
    public path = '/task';
    public router = Router();
    public taskController = new TaskController();

    constructor() {
        this.initializeRoutes();
    }


    public initializeRoutes(){
        this.router.get(`${this.path}`,
            this.taskController.getAllTasks);

        this.router.post(`${this.path}/create`,
            this.taskController.createTask)
    }

}

export default TaskRoute
