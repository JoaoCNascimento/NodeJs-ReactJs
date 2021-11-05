import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface IAluno {
    id: number;
    nome: string;
    ra: string;
    matriculado: boolean;
    endereco: string;
    datanascimento: string;
    idade: Number;
    created_at: Date;
    updated_at: Date;
}

const Home: React.FC = () => {

    const history = useHistory();

    const [alunos, setTasks] = useState<IAluno[]>([])

    useEffect(() => {
        loadAlunos()
    }, [])

    async function loadAlunos() {
        const response: any = await api.get('/')
        console.log(response);
        setTasks(response.data);
    }

    async function switchMatricula(id: number) {
        await api.patch(`/${id}`);
        loadAlunos();
    }

    function viewAluno(id: number) {
        history.push(`/detalhes-aluno/${id}`)
    }

    function editAluno(id: number) {
        history.push(`/editar-aluno/${id}`)
    }

    async function deleteAluno(id: number) {
        await api.delete(`/${id}`)
        loadAlunos();
    }

    return (
        <div className="p-3">
            <h1 className="mb-3">Tabela de Alunos</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>RA</th>
                        <th>Endereço</th>
                        <th>Data de nascimento</th>
                        <th>Idade</th>
                        <th>Matrícula</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.ra}</td>
                                <td>{aluno.endereco}</td>
                                <td>{aluno.datanascimento}</td>
                                <td>{aluno.idade}</td>
                                <td>{aluno.matriculado ? "Ativa" : "Trancada"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editAluno(aluno.id)}>Editar</Button>{' '}
                                    <Button size="sm" variant="success" onClick={() => switchMatricula(aluno.id)}>Alterar Matrícula</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewAluno(aluno.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteAluno(aluno.id)} >Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <a href="/novo-aluno">
                <Button variant="success">Novo Aluno</Button>
            </a>
        </div>
    );

}

export default Home;