import React, { Component, useState, useEffect } from 'react';

import api from '../../services/api';

const Projetos: React.FC = () => {

    const [projetos, setProjetos] = useState<any[]>([]);

    useEffect(() => {
        getProjetos()
    }, []);

    async function getProjetos() {
        const response = await api.get('/repos');
        setProjetos(response.data);
    }

    return (
        <div className="card p-3 m-3">
            <h2><b>Projetos</b></h2>
            {
                projetos.map(e => (
                    <div key={e.id} className="p-2">
                        <a href={e.html_url} target="_blank"> {e.name} </a>
                        <p> {e.description}</p>
                        <hr />
                    </div>
                ))
            }
        </div>
    )
}

export default Projetos;