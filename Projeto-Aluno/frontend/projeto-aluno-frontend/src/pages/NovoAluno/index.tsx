import moment from 'moment';
import React, { useState, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import api from '../../services/api';

interface IAluno {
    nome: string;
    ra: string;
    matriculado: boolean;
    endereco: string;
    datanascimento: string;
    idade: Number
}

const NewAluno: React.FC = () => {

    const history = useHistory();

    const [model, setModel] = useState<IAluno>({
        nome: '',
        ra: '',
        matriculado: true,
        endereco: '',
        datanascimento: '',
        idade: 0
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

    function calculateAge() {
        return moment().year() - Number(model.datanascimento.split('/')[2]);
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        model.idade = calculateAge();
        const response = await api.post('/', model);

        console.log(response.data);

        back();
    }

    return (

        <div className="container">
            <br />
            <div className="task-header">
                <h1>Novo Aluno</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mt-3">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="endereco"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                            type="text"
                            name="ra"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            type="text"
                            name="datanascimento"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Button className="mt-3" variant="dark" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default NewAluno;
