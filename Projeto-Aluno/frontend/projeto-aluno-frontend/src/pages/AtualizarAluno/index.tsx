import React, { useState, ChangeEvent, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

interface IAluno {
    nome: string;
    ra: string;
    matriculado: boolean;
    endereco: string;
    datanascimento: string;
    idade: Number
}
const UpdateAluno: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<{ id: string }>()

    const [model, setModel] = useState<IAluno>({
        nome: '',
        ra: '',
        matriculado: true,
        endereco: '',
        datanascimento: '',
        idade: 0
    });

    useEffect(() => {
        console.log(id);
        findAluno(id);
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        model.idade = calculateAge();
        const response = await api.put('/' + id, model);

        console.log(response.data);

        back();
    }

    function calculateAge() {
        return moment().year() - Number(model.datanascimento.split('/')[2]);
    }

    function back() {
        history.goBack()
    }

    async function findAluno(id: string) {
        const response: any = await api.get(`/${id}`)
        console.log(response)
        setModel({
            nome: response.data.nome,
            ra: response.data.ra,
            matriculado:response.data.matriculado,
            endereco: response.data.endereco,
            datanascimento: response.data.datanascimento,
            idade: response.data.idade
        })
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
                            value={model.nome}
                            placeholder="Digite o nome do aluno"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="endereco"
                            value={model.endereco}
                            placeholder="Digite o endereço do aluno"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>RA</Form.Label>
                        <Form.Control
                            type="text"
                            name="ra"
                            value={model.ra}
                            placeholder="Digite o RA do aluno"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} />
                    </Form.Group>

                    <Form.Group className="mt-3">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                            type="text"
                            name="datanascimento"
                            placeholder="dd/mm/aaaa"
                            value={model.datanascimento}
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

export default UpdateAluno;
