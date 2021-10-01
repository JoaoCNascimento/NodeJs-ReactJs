import { getRepository } from "typeorm";
import { Tasks } from '../entity/Tasks';
import { Request, Response } from "express";
 
export const getTasks = async(request: Request, response: Response) => {
    const tasks = await getRepository(Tasks).find()
    return response.json(tasks);
};
 
export const saveTasks = async(request: Request, response: Response) => {
    const task = await getRepository(Tasks).save(request.body)
    return response.json(task);
};

export const getAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Tasks).findOne(id)
    return response.json(task);
};

export const updateAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Tasks).update(id, request.body)
 
    if (task.affected == 1){
        const taskUpdated = await getRepository(Tasks).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const deleteAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Tasks).delete(id)
 
    if (task.affected == 1){
        return response.status(200).json( {message: "Aluno excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const finishedAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Tasks).update(id, {
        finished: true,
    })
 
    if (task.affected == 1){
        const taskFinished = await getRepository(Tasks).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};