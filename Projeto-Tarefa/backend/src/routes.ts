import { Router, request, response, Request, Response } from 'express'

import { getTasks } from './controller/TasksController';
import { saveTasks } from './controller/TasksController';
import { getTask } from './controller/TasksController';
import { updateTask } from './controller/TasksController';
import { deleteTask } from './controller/TasksController';
import { finishTask } from './controller/TasksController'

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'API is working.' })
})

routes.get('/', getTasks);
routes.post('/', saveTasks);
routes.get('/:id', getTask);
routes.put('/:id', updateTask);
routes.delete('/:id', deleteTask);
routes.patch('/:id', finishTask);

export default routes