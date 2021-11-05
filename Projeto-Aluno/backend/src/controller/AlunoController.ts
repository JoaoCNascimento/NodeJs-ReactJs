import { getRepository } from "typeorm";
import { Alunos } from '../entity/Aluno';
import { Request, Response } from "express";
 
export const getAlunos = async(request: Request, response: Response) => {
    const tasks = await getRepository(Alunos).find()
    return response.json(tasks);
};
 
export const saveAlunos = async(request: Request, response: Response) => {
    const aluno = await getRepository(Alunos).save(request.body)
    return response.json(aluno);
};

export const getAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).findOne(id)
    return response.json(aluno);
};

export const updateAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).update(id, request.body)
 
    if (aluno.affected == 1){
        const taskUpdated = await getRepository(Alunos).findOne(id)
        return response.json(taskUpdated);
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const deleteAluno = async(request: Request, response: Response) => {
    const {id} = request.params
    const aluno = await getRepository(Alunos).delete(id)
 
    if (aluno.affected == 1){
        return response.status(200).json( {message: "Aluno excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Aluno não encontrado!'} )
    }
};

export const finishedAluno = async(request: Request, response: Response) => {
    const {id} = request.params;
    const aluno = await getRepository(Alunos).findOne(id);
    const alunoUpdate = await getRepository(Alunos).update(id, {
        matriculado: !aluno.matriculado
    });
 
    if (alunoUpdate.affected == 1){
        const taskFinished = await getRepository(Alunos).findOne(id);
        return response.json(taskFinished);
    }
    return response.status(404).json( {message: 'Tarefa não encontrada!'} );
};



