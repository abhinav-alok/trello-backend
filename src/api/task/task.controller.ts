// import TaskService from './task.service';
import {NextFunction, Request, Response} from "express";
import {Task} from './task.interface';
import taskModel from "./task.model";

const https = require('https');

class TaskController{
    // public taskService = new TaskService();
    public TASK_KEY = 'tasks';
    public tasks =  taskModel;

    public getAllTasks =  (req: Request, res: Response, next: NextFunction) => {


    }

    public createTask = (req: Request, res: Response) => {
        const {name, description} = req.body;
        let task = {
            name: name,
            description: description
        }

        new this.tasks(task).save();

        res.send({
            success: true,
            message: 'Task created'
        })
    }

}

export default TaskController;
