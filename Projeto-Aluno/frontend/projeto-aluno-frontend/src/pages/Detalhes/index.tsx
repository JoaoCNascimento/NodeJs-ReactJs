import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'
import api from '../../services/api';
import moment from 'moment';

interface IAluno {
    id: number;
    nome: string;
    ra: string;
    matriculado: boolean;
    endereco: string;
    datanascimento: string;
    created_at: Date;
    updated_at: Date;
}

const Detail: React.FC = () => {

    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [aluno, setAluno] = useState<IAluno>();

    function back() {
        history.goBack()
    }

    async function findAluno() {
        const response = await api.get<IAluno>(`/${id}`);
        console.log(response)
        setAluno(response.data)
    }

    // Quando o param "id" mudar/receber um novo valor, o useEffect será executado chamando o findAluno
    useEffect(() => {
        findAluno()
    }, [id])

    return (
        <div className="container">
            <br />
            <div className="aluno-header">
                <h1>Detalhes da Tarefa</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />

            <Card>
                <Card.Body className="w-100">
                    <Card.Title>{aluno?.nome}</Card.Title>
                    <Card.Text>
                        <div className="w-100">
                            <p>{aluno?.endereco}</p>
                            <p><b>RA:</b> {aluno?.ra}</p>
                            <p><b>Nascimento:</b> {aluno?.datanascimento}</p>
                        </div>
                        <hr />
                        <br />
                        <b>Status:</b> {aluno?.matriculado ? "Ativa" : "Trancada"}
                        <br />
                        <strong>Data de Cadastro: </strong>
                        {moment(aluno?.created_at).format('DD/MM/YYYY')}
                        <br />
                        <strong>Data de Atualização: </strong>
                        {moment(aluno?.updated_at).format('DD/MM/YYYY')}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div >
    );
}

export default Detail;