import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface ITask {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

const Home: React.FC = () => {

    const history = useHistory();

    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        loadTasks()
    }, [])

    async function loadTasks() {
        const response: any = await api.get('/')
        console.log(response);
        setTasks(response.data);
    }

    async function finishTask(id: number) {
        await api.patch(`/${id}`);
        loadTasks();
    }

    function viewTask(id: number) {
        history.push(`/detalhes-tarefa/${id}`)
    }

    function editTask(id: number) {
        history.push(`/editar-tarefa/${id}`)
    }

    async function deleteTask(id: number) {
        await api.delete(`/${id}`)
        loadTasks();
    }

    return (
        <div className="p-3">
            <h1 className="mb-3">Minhas tarefas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Data de Atualização</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{moment(task.updated_at).format("DD/MM/YYYY")}</td>
                                <td>{task.finished ? "Finalizado" : "Pendente"}</td>
                                <td>
                                    <Button size="sm" variant="primary" onClick={() => editTask(task.id)}>Editar</Button>{' '}
                                    <Button size="sm" disabled={task.finished} variant="success" onClick={() => finishTask(task.id)}>Finalizar</Button>{' '}
                                    <Button size="sm" variant="warning" onClick={() => viewTask(task.id)}>Visualizar</Button>{' '}
                                    <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)} >Remover</Button>{' '}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <a href="/nova-tarefa">
                <Button variant="success">Nova Tarefa</Button>
            </a>
        </div>
    );

}

export default Home;