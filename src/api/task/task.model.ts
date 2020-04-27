import * as mongoose from 'mongoose';
import {Types} from 'mongoose';
import {Task} from './task.interface';


const taskSchema = new mongoose.Schema({
    id: {
        type: Types.ObjectId
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
}, {timestamps: true});

const taskModel = mongoose.model<Task & mongoose.Document>('Task', taskSchema);

export default taskModel;
