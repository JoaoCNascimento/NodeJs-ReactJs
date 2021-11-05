import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UpdateAluno from './pages/AtualizarAluno';
import Detail from './pages/Detalhes';

import Home from './pages/Home';
import NewAluno from './pages/NovoAluno';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/novo-aluno" exact component={NewAluno} />
            <Route path="/editar-aluno/:id" exact component={UpdateAluno} />
            <Route path="/detalhes-aluno/:id" exact component={Detail} />
        </Switch>
    );
}

export default Routes;