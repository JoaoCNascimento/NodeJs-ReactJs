import { Router, request, response, Request, Response} from 'express'
 
import { getAlunos } from './controller/TasksController';
import { saveAlunos } from './controller/TasksController';
import { getAluno } from './controller/TasksController';
import { updateAluno } from './controller/TasksController';
import { deleteAluno } from './controller/TasksController';
import { finishedAluno } from './controller/TasksController' 

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/alunos', getAlunos)
routes.post('/alunos', saveAlunos)
routes.get('/aluno/:id', getAluno)
routes.put('/aluno/:id', updateAluno)
routes.delete('/aluno/:id', deleteAluno)
routes.patch('/aluno/:id', finishedAluno) 

export default routes