import React, { useState, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface ITask {
    title: string;
    description: string;
}

const NewTask: React.FC = () => {

    const history = useHistory();

    const [model, setModel] = useState<ITask>({
        title: '',
        description: ''
    })

    function back() {
        return history.goBack();
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await api.post('/', model);

        console.log(response.data);

        back();
    }

    return (

        <div className="container">
            <br />
            <div className="task-header">
                <h1>Nova Tarefa</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default NewTask;
