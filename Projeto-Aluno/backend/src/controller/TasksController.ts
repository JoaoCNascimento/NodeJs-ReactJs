import { getRepository } from "typeorm";
import { Alunos } from '../entity/Tasks';
import { Request, Response } from "express";
 
export const getAlunos = async(request: Request, response: Response) => {
    const tasks = await getRepository(Alunos).find()
    return response.json(tasks);
};
 
export const saveAlunos = async(request: Request, response: Response) => {
    const task = await getRepository(Alunos).save(request.body)
    return response.json(task);
};

export const getAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).findOne(id)
    return response.json(task);
};

export const updateAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).update(id, request.body)
 
    if (task.affected == 1){
        const taskUpdated = await getRepository(Alunos).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const deleteAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).delete(id)
 
    if (task.affected == 1){
        return response.status(200).json( {message: "Aluno excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const finishedAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const task = await getRepository(Alunos).update(id, {
        matriculado: true,
    })
 
    if (task.affected == 1){
        const taskFinished = await getRepository(Alunos).findOne(id)
        return response.json(taskFinished);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};



