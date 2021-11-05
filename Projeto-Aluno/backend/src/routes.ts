import { Router, request, response, Request, Response} from 'express'
 
import { getAlunos } from './controller/AlunoController';
import { saveAlunos } from './controller/AlunoController';
import { getAluno } from './controller/AlunoController';
import { updateAluno } from './controller/AlunoController';
import { deleteAluno } from './controller/AlunoController';
import { finishedAluno } from './controller/AlunoController' 

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
 
routes.get('/', getAlunos);
routes.post('/', saveAlunos);
routes.get('/:id', getAluno);
routes.put('/:id', updateAluno);
routes.delete('/:id', deleteAluno);
routes.patch('/:id', finishedAluno); 

export default routes