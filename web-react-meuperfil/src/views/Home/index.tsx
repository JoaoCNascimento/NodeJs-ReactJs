import React, { Component, useEffect } from 'react';

import foto from '../../assets/img/foto_perfil.jpg';

class Home extends Component {

    render() {

        return (
            <div>
                <div className="d-flex xs justify-content-around align-items-center shadow p-3 pt-5 pb-5 m-3">
                    <div className="w-50 d-flex align-items-center">
                        <img src={foto} className="w-50 shadow m-auto" alt="Uma foto minha." />
                    </div>
                    {/* --------------------------------------- */}
                    <div className="w-50">
                        <h4 className="text-center">João Carlos Silva do Nascimento</h4>
                        <p className="text-center">Estudante | Estagiário em desenvolvimento na Concert Technologies </p>
                        <p><b>Idade:</b> {new Date().getFullYear() - 2002} </p>
                        <p><b>Email:</b> joao.nascimento0576@gmail.com</p>
                        <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/joao-nascimento0576/" target="_blank">https://www.linkedin.com/in/joao-nascimento0576/</a></p>
                        <p><b>Github:</b> <a href="https://github.com/JoaoCNascimento/" target="_blank">https://github.com/JoaoCNascimento/</a></p>
                        <p><b>Formação:</b> Cursando Análise e Desenvolvimento de Sistemas</p>
                    </div>
                </div>
                {/* --------------------------- */}
                <div className="shadow p-3 pt-5 pb-5 m-3 mt-5 overflow-auto">
                    <table className="table text-center">
                        <thead className="bg-info text-white bg-primary">
                            <th className="p-1">Linguagens</th>
                            <th className="p-1">Frameworks</th>
                            <th className="p-1">Outros</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HTML</td>
                                <td>Node Js</td>
                                <td>Git</td>
                            </tr>
                            {/*  */}
                            <tr>
                                <td>CSS</td>
                                <td>React Js</td>
                                <td>Github</td>
                            </tr>
                            {/*  */}
                            <tr>
                                <td>JavaScript</td>
                                <td>Angular</td>
                                <td>Linux</td>
                            </tr>
                            {/*  */}
                            <tr>
                                <td>Java</td>
                                <td>Flutter</td>
                                <td>---------------</td>
                            </tr>
                            {/*  */}
                            <tr>
                                <td>C#</td>
                                <td>---------------</td>
                                <td>---------------</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        );
    }
}

export default Home;