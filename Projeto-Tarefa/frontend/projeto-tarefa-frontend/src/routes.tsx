import React from 'react';
import { Switch, Route } from 'react-router-dom'
import UpdateTask from './pages/AtualizarTarefa';
import Detail from './pages/Detalhes';

import Home from './pages/Home';
import NewTask from './pages/NovaTarefa';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nova-tarefa" exact component={NewTask} />
            <Route path="/editar-tarefa/:id" exact component={UpdateTask} />
            <Route path="/detalhes-tarefa/:id" exact component={Detail} />
        </Switch>
    );
}

export default Routes;