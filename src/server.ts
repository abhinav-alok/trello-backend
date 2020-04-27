import App from './App';
import TaskRoute from './api/task/task.route';

const port = process.env.PORT || 3000;

const app = new App([
    new TaskRoute()
]);

app.listen();